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
                }}
            ).then(user =>
                res.send(user)
                )
        }

        //const userToLogin = db.Users.findByField('email', req.body.email);
        //return res.send(db.Users);
        //res.send(req.body);
    }
}

module.exports = controller;