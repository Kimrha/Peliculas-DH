let db = require('../database/models');
const controller = {
    'index': (req, res) => {
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('index',{peliculas:peliculas})
        })
    },
    'movieDetail': (req, res) => {
        db.Users.findAll()
        .then(function(users) {
            console.log(users)
            return res.render('movieDetail', {users:users})
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