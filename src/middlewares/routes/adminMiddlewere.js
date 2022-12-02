function adminMiddlewere(req, res, next) {
    if(!req.session.userLogged || req.session.userLogged.rol != 1) {
        return res.redirect('/home')
    }
    next();
}
module.exports = adminMiddlewere;