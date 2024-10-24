const express = require('express');
const { crearRecordatorio, obtenerRecordatorios, obtenerRecordatorioPorId, actualizarRecordatorio, eliminarRecordatorio } = require('../controllers/recordatoryController');
const recordatorioRouter = express.Router();

recordatorioRouter.post('/', crearRecordatorio);
recordatorioRouter.get('/', obtenerRecordatorios);
recordatorioRouter.get('/:id', obtenerRecordatorioPorId);
recordatorioRouter.put('/:id', actualizarRecordatorio);
recordatorioRouter.delete('/:id', eliminarRecordatorio);

module.exports = recordatorioRouter;
