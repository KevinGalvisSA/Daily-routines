const express = require('express');
const { crearReporte } = require('../controllers/reportController');
const reporteRouter = express.Router();

reporteRouter.post('/reporte', crearReporte);

module.exports = reporteRouter;
