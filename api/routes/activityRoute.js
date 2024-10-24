const express = require('express');
const { crearActividad, actualizarActividad } = require('../controllers/activityController');
const activyRouter = express.Router();

activyRouter.post('/actividad', crearActividad);
activyRouter.put('/actividad/:id', actualizarActividad);

module.exports = activyRouter;
