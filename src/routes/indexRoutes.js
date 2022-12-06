const express = require('express');
const router = express.Router();

const validationsMovieCreate = require('../middlewares/routes/validationsMovieCreate')
const adminMiddlewere = require('../middlewares/routes/adminMiddlewere')

const indexController = require('../controllers/indexController.js');

//listado de peliculas
router.get('/home', indexController.index);

//detalle de cada pelicula
router.get('/movieDetail/:idPelicula', indexController.movieDetail); //ruta parametrizada


//formulario create de peliculas
router.get('/movieCreate', adminMiddlewere, indexController.movieCreate);

//create de pelicula
router.post('/movieCreate', validationsMovieCreate, indexController.movieCreatePost)

//update de pelicula
router.get('/movieEdit/:id', adminMiddlewere, indexController.movieEdit);
router.post('/movieEdit/:id', indexController.movieUpdate);
//delete de pelicula
router.get('/movieDelete/:id', indexController.movieDelete);
router.post('/movieDelete/:id', indexController.movieDelete);

module.exports = router;