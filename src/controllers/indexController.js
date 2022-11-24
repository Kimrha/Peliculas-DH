const controller = {
    'index': (req, res) => {
        return res.render('index');
    },
    'movieDetail': (req, res) => {
        return res.render('movieDetail')
    },
    'movieForms': (req,res) => {
        return res.render('movieForms')
    }
}

module.exports = controller;