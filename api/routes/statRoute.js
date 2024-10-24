const express = require('express');
const { crearEstadistica } = require('../controllers/statController');
const estadisticaRouter = express.Router();

estadisticaRouter.post('/estadistica', crearEstadistica);

module.exports = estadisticaRouter;
