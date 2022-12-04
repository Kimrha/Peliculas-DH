let db = require('../database/models');
const { validationResult } = require('express-validator');

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
    'movieCreatePost': (req,res) => {
        const resultValidation = validationResult(req);

        db.Genres.findAll()
        .then(function(generos){
            if (resultValidation.errors.length > 0) {
                return res.render('movieCreate', {generos:generos ,
                    errors:resultValidation.mapped(), oldData: req.body
                });
            } else {
                db.Movies.create({
                    title: req.body.titulo,
                    awards: req.body.premios,
                    release_date: req.body.fecha_estreno,
                    genre_id: req.body.genero,
                    length: req.body.duracion,
                    rating: req.body.rating
                })
                res.redirect('/home')
            }
        })


        /*if (resultValidation.errors.length > 0) {
            return res.render('movieCreate', {
                errors:resultValidation.mapped(),
            });
        }*/
    },
    
    'movieEdit': (req,res) => {
        let orderMovie = db.Movies.findByPk(req.params.id);
        let orderGenre = db.Genres.findAll();

        Promise.all([orderMovie, orderGenre])
        .then(function([pelicula, generos]) {
            res.render('movieEdit', {pelicula:pelicula, generos:generos})
        })
    },

    'movieUpdate': (req, res) => {
        db.Movies.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/home')
    },
    'probando': (req, res) => {
        db.Movies.findAll({ include: ["genres"] })
        .then(function(peliculas) {
            res.send(peliculas)
        })
    },
    'movieDelete': (req, res) => {
        db.Movies.destroy({
            where:{
                id:req.params.id
            }
        }).then(() => {
            res.redirect('/home');
        })
    },
}

module.exports = controller;