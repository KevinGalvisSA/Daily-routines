const express = require('express');
const { crearObjetivo, obtenerObjetivos, obtenerObjetivoPorId, actualizarObjetivo, eliminarObjetivo } = require('../controllers/objectiveController');
const objetivoRouter = express.Router();

objetivoRouter.post('/', crearObjetivo);
objetivoRouter.get('/', obtenerObjetivos);
objetivoRouter.get('/:id', obtenerObjetivoPorId);
objetivoRouter.put('/:id', actualizarObjetivo);
objetivoRouter.delete('/:id', eliminarObjetivo);

module.exports = objetivoRouter;
