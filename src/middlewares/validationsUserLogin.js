const { body } = require('express-validator')
let db = require('../database/models');

const validationsUserLogin = [
    body('email').notEmpty().withMessage('El campo email no puede quedar vacio').bail()
        .isEmail().withMessage('Debe ser un email').bail()
        .custom((value,{req}) => {
                return db.Users.findOne(
                    {where: {
                        email: req.body.email,}}
                )
                .then(user => {
                    if(user != null){
                        return true
                    }else {
                        return Promise.reject ('Email no registrado')
                    }
                }).catch(error => {throw new Error(error)})
            //si existe el usuario devolver true
            //si no existe devolver tenemos error
        }) ,
    body('contraseña').notEmpty().withMessage('Debe escribir una contraseña').bail()
    .custom((value,{req}) => {
                return db.Users.findOne(
                    {where: {
                        email: req.body.email,
                        password: req.body.contraseña
                    }}
                )
                .then(user => {
                    if(user != null){
                        return true
                    }else {
                        return Promise.reject ('Contraseña invalida')
                    }
                }).catch(error => {throw new Error(error)})
        })
        //tiene que coincidir con la contraseña de la base de datos
]

module.exports = validationsUserLogin;