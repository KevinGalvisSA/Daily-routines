const express = require('express');
const { crearEtiqueta } = require('../controllers/tagController');
const etiquetaRouter = express.Router();

etiquetaRouter.post('/etiqueta', crearEtiqueta);

module.exports = etiquetaRouter;
