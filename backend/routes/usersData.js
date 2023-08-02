const express = require('express');
const router = express.Router();

const userController = require('../controllers/userData');

router.get('/getUser', userController.getUsersController);
router.post('/createUser', userController.registerUserController);
router.post('/login', userController.loginUserController);
module.exports = router;
