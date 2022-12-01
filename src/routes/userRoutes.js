const express = require('express');
const router = express.Router();

const validationsUserCreate = require('../middlewares/validationsUserCreate')
const validationsUserLogin = require('../middlewares/validationsUserLogin')

const userController = require('../controllers/userController.js');

//Registracion
router.get('/register', userController.register);
router.post('/register', validationsUserCreate, userController.registerPost)

//Login
router.get('/login', userController.login);
router.post('/login', validationsUserLogin, userController.loginProcess);

//Profile
router.get('/profile', userController.profile);
module.exports = router;