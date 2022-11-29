const express = require('express');
const router = express.Router();

const { body } = require('express-validator')

const validations = [
    body('titulo').notEmpty().withMessage('El campo titulo no puede quedar vacio'),
    body('premios').notEmpty().withMessage('El campo premios no puede quedar vacio'),
    body('duracion').notEmpty().withMessage('El campo duracion no puede quedar vacio'),
    body('genero').notEmpty().withMessage('El campo genero no puede quedar vacio'),
    body('fecha_estreno').notEmpty().withMessage('El campo fecha de estreno no puede quedar vacio'),
    body('rating').notEmpty().withMessage('El campo rating no puede quedar vacio')
]

const indexController = require('../controllers/indexController.js');

//listado de peliculas
router.get('/home', indexController.index);

//detalle de cada pelicula
router.get('/movieDetail/:idPelicula', indexController.movieDetail); //ruta parametrizada


//formulario create de peliculas
router.get('/movieCreate', indexController.movieCreate);

//create de pelicula
router.post('/movieCreate', validations, indexController.movieCreatePost)

//update de pelicula
router.get('/movieEdit/:id', indexController.movieEdit);
router.post('/movieEdit/:id', indexController.movieUpdate);
//delete de pelicula
router.get('/movieDelete/:id', indexController.movieDelete);
router.post('/movieDelete/:id', indexController.movieDelete);

router.get('/pruebas', indexController.probando)

module.exports = router;