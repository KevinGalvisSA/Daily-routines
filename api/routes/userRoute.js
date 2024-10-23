const express = require('express');
const { registrarUsuario, iniciarSesion } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.post('/usuario', registrarUsuario);
userRouter.post('/usuario/iniciarSesion', iniciarSesion);

module.exports = userRouter;
