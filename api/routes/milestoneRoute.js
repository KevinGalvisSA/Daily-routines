const express = require('express');
const { crearHito, completarHito } = require('../controllers/milestoneController');
const milestoneRouter = express.Router();

milestoneRouter.post('/hito', crearHito);
milestoneRouter.put('/hito/:id/completar', completarHito);

module.exports = milestoneRouter;
