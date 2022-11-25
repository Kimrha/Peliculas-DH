let db = require('../database/models');

const controller = {
    'index': (req, res) => {
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('index',{peliculas:peliculas})
        })
    },
    'movieDetail': (req, res) => {
        return res.render('movieDetail')
    },
    'movieRegister': (req,res) => {
        return res.render('movieRegister')
    },
    'movieEdit': (req,res) => {
        return res.render('movieEdit')
    }
}

module.exports = controller;