const express = require('express');
const { asignarColaborador, obtenerColaboradoresPorActividad } = require('../controllers/colaborationController');
const colaboracionRouter = express.Router();

colaboracionRouter.post('/', asignarColaborador);
colaboracionRouter.get('/:id', obtenerColaboradoresPorActividad);

module.exports = colaboracionRouter;
