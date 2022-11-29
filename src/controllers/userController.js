const { validationResult } = require('express-validator');

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
            res.redirect('/home')
        }
    },
    'login': (req, res) => {
        return res.render('userLogin');
    },
}

module.exports = controller;