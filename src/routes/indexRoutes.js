const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

//listado de peliculas
router.get('/home', indexController.index);

//detalle de cada pelicula
router.get('/movieDetail/:idPelicula', indexController.movieDetail); //ruta parametrizada


//formulario create de peliculas
router.get('/movieCreate', indexController.movieCreate);
//create de pelicula
router.post('/movieCreate', indexController.movieCreatePost);
//update de pelicula
router.get('/movieEdit/:id', indexController.movieEdit);
router.post('/movieEdit/:id', indexController.movieUpdate);
//delete de pelicula
router.get('/movieDelete/:id', indexController.movieDelete);
router.post('/movieDelete/:id', indexController.movieDelete);

router.get('/pruebas', indexController.probando)

module.exports = router;