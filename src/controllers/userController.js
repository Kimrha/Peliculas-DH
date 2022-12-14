let db = require('../database/models');
const { validationResult, body } = require('express-validator');

const controller = {
    'register': (req, res) => {
        return res.render('userRegister');
    },
    'registerPost': (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('userRegister', { errors:resultValidation.mapped(),
            oldData: req.body});
        } else {
            db.Users.create({
                name: req.body.nombre,
                email: req.body.email,
                password: req.body.contraseña,
            })
            res.redirect('/home')
        }
    },
    'login': (req, res) => {
        //console.log(req.session)
        return res.render('userLogin');
    },
    'loginProcess': (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('userLogin', { errors:resultValidation.mapped(),
            oldData: req.body});
        } else {
            db.Users.findOne(
                {where: {
                    email: req.body.email,
                    password: req.body.contraseña
                }}).then(user => {
                    delete user.dataValues.password
                    req.session.userLogged = user;
                    if (req.body.recuerdame){
                        res.cookie('userEmail', req.body.email, { maxAge: (100 * 60) * 7})
                    }
                    res.redirect('/user/profile');
                })}
    },
    'profile': (req, res) => {
        console.log(req.session.userLogged)
        console.log(req.cookies.userEmail)
        res.render('profile', {user: req.session.userLogged});
    },
    'logout': (req,res) => {
        req.session.destroy();
        res.redirect('/user/login')
    }
}

module.exports = controller;