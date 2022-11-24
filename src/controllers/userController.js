const controller = {
    'register': (req, res) => {
        return res.render('userRegister');
    },
    'login': (req, res) => {
        return res.render('userLogin');
    },
}

module.exports = controller;