const express = require('express');
const router = express.Router();

const validationsUserCreate = require('../middlewares/validationsUserCreate')
const validationsUserLogin = require('../middlewares/validationsUserLogin')
const guestMiddlewere = require('../middlewares/guestMiddlewere')
const authMiddlewere = require('../middlewares/authMiddlewere')

const userController = require('../controllers/userController.js');

//Registracion
router.get('/register', guestMiddlewere , userController.register);
router.post('/register', validationsUserCreate, userController.registerPost)

//Login
router.get('/login',guestMiddlewere , userController.login);
router.post('/login', validationsUserLogin, userController.loginProcess);

//Profile
router.get('/profile', authMiddlewere, userController.profile);

//Logout
router.get('/logout', userController.logout)

module.exports = router;