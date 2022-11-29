
const { body } = require('express-validator')

const validationsMovieCreate = [
    body('titulo').notEmpty().withMessage('El campo titulo no puede quedar vacio'),
    body('premios').notEmpty().withMessage('El campo premios no puede quedar vacio')
    .isNumeric().withMessage('Debe ingresar un número.'),
    body('duracion').notEmpty().withMessage('El campo duracion no puede quedar vacio')
    .isNumeric().withMessage('Debe ingresar un número.'),
    body('genero').isNumeric().withMessage('Debe seleccionar un genero.'),
    body('fecha_estreno').notEmpty().withMessage('El campo fecha de estreno no puede quedar vacio'),
    body('rating').notEmpty().withMessage('El campo rating no puede quedar vacio')
    .isFloat().withMessage('Debe ingresar un número decimal.')
]

module.exports = validationsMovieCreate;