const express = require('express');
const { crearObjetivo, obtenerObjetivos } = require('../controllers/objectiveController');
const objectiveRouter = express.Router();

objectiveRouter.post('/objetivo', crearObjetivo);
objectiveRouter.get('/objetivo', obtenerObjetivos);

module.exports = objectiveRouter;
