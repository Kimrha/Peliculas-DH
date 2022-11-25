let db = require('../database/models');

const controller = {
    'index': (req, res) => {
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('index',{peliculas:peliculas})
        })
    },
    'movieDetail': (req, res) => {
        db.Actors.findAll()
        .then(function(actores) {
            console.log(actores)
            res.render('movieDetail', {actores:actores})
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