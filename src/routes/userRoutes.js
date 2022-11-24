const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/register', userController.register);

router.get('/login', userController.login);

router.post('/userLogin', userController.login)

module.exports = router;