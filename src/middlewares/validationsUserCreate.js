const { body } = require('express-validator')

const validationsUserCreate = [
    body('nombre').notEmpty().withMessage('El campo nombre no puede quedar vacio'),
    body('email').notEmpty().withMessage('El campo email no puede quedar vacio').isEmail().withMessage('Debe ser un email'),
    body('contraseña').notEmpty().withMessage('Debe escribir una contraseña'),
]

module.exports = validationsUserCreate;