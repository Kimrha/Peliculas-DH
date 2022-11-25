let db = require('../database/models');

const controller = {
    'index': (req, res) => {
        db.Movies.findAll()
        .then(function(peliculas) {
            //res.send(peliculas)
            res.render('index',{peliculas:peliculas})
        })
    },
    'movieDetail': (req, res) => {
        db.Movies.findAll({
            include: [{association:'genres'}]
        })
        .then(function(peliculas) {
            res.render('movieDetail',{peliculas:peliculas[req.params.idPelicula]})
        })
    },
    'movieRegister': (req,res) => {
        return res.render('movieRegister')
    },
    'movieEdit': (req,res) => {
        return res.render('movieEdit')
    }
}

module.exports = controller;