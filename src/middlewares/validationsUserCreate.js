const { body } = require('express-validator')
let db = require('../database/models');

const validationsUserCreate = [
    body('nombre')
        .notEmpty().withMessage('El campo nombre no puede quedar vacio').bail()
        .isLength({min: 2}).withMessage('Mínimo 2 caracteres'),
    body('email').notEmpty().withMessage('El campo email no puede quedar vacio').bail()
        .isEmail().withMessage('Debe ser un email').bail()
        .custom((value,{req}) => {
                return db.Users.findAll()
                .then(users => {
                    let listOfEmails = users.map(user => user.email)
                    if(listOfEmails.indexOf(value) != -1){
                        return Promise.reject ('Usuario ya registrado')
                    } else {
                        return true
                    }
                }).catch(error => {throw new Error(error)})
            //si no existe el usuario devolver true
            //si existe devolver tenemos error
            //throw new Error ('Este usuario existe en la base de datos')
        }) ,
    body('contraseña').notEmpty().withMessage('Debe escribir una contraseña').bail()
        .isLength({min:8}).withMessage('Minimo 8 caracteres'),
]

module.exports = validationsUserCreate;