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
        db.Movies.findAll({ include: ["genres", "actors"] })
        .then(function(peliculas) {
            //res.send(peliculas[req.params.idPelicula])
            res.render('movieDetail',{peliculas:peliculas[req.params.idPelicula]})
        })
    },
    'movieCreate': (req,res) => {
        db.Genres.findAll()
        .then(function(generos){
            return res.render('movieCreate', {generos:generos})
        })
        
    },
    'movieCreatePost': (req, res) => {
        db.Movies.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        })
        res.redirect('/home')
    },
    'movieEdit': (req,res) => {
        return res.render('movieEdit')
    },
    'probando': (req, res) => {
        db.Movies.findAll({ include: ["genres"] })
        .then(function(peliculas) {
            res.send(peliculas)
        })
    }
}

module.exports = controller;