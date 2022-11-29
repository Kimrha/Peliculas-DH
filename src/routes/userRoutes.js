const express = require('express');
const router = express.Router();

const validationsUserCreate = require('../middlewares/validationsUserCreate')

const userController = require('../controllers/userController.js');

router.get('/register', userController.register);
router.post('/register', validationsUserCreate, userController.registerPost)

router.get('/login', userController.login);

router.post('/userLogin', userController.login)

module.exports = router;