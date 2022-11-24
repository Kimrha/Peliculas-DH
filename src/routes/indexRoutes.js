const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js');

router.get('/home', indexController.index);

router.get('/movieDetail', indexController.movieDetail);

router.get('/movieForms', indexController.movieForms);

router.put('/movieDetail/edit', function(req, res){
    res.send('Fui por PUT!');
});

router.delete('/movieDetail/delete/:idUser', function(req,res){
    res.send('SOY DELETE!');
});

module.exports = router;