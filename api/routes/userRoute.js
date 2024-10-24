const express = require('express');
const { registrarUsuario, iniciarSesion } = require('../controllers/userController');
const verificarSesion = require('../middlewares/verifySession');
const userRouter = express.Router();

userRouter.get('/', verificarSesion, (req, res) => {
    res.json({ message: `Bienvenido, usuario con ID: ${req.user.id}` });
});

userRouter.post('/usuario', registrarUsuario);
userRouter.post('/usuario/iniciarSesion', iniciarSesion);

module.exports = userRouter;
