const controller = {
    'index': (req, res) => {
        return res.render('index');
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