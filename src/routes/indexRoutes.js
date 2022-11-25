const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

router.get('/home', indexController.index);

router.get('/movieDetail/:idPelicula', indexController.movieDetail); //ruta parametrizada

router.get('/movieRegister', indexController.movieRegister);

router.get('/movieEdit', indexController.movieEdit);

router.put('/movieDetail/edit', function(req, res){
    res.send('Fui por PUT!');
});

router.delete('/movieDetail/delete/:idUser', function(req,res){
    res.send('SOY DELETE!');
});

module.exports = router;