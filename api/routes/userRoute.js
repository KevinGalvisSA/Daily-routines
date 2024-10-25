const express = require('express');
const verificarSesion = require('../middlewares/verifySession');
const { obtenerUsuarios, obtenerUsuarioPorId, registrarUsuario, iniciarSesion, validarSesion, actualizarUsuario, eliminarUsuario } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/', verificarSesion, (req, res) => {
    res.json({ message: `Bienvenido, usuario con ID: ${req.user.id}` });
});

userRouter.get('/usuarios', obtenerUsuarios);
userRouter.get('/usuarios/:id', obtenerUsuarioPorId);

userRouter.post('/usuarios', registrarUsuario);
userRouter.post('/usuarios/iniciarSesion', iniciarSesion);
userRouter.post('/usuarios/validarSesion', validarSesion);

userRouter.put('/usuarios/:id', actualizarUsuario);

userRouter.delete('/usuarios/:id', eliminarUsuario);

module.exports = userRouter;
