const express = require('express');
const { crearCategoria, obtenerCategorias, obtenerCategoriaPorId, actualizarCategoria, eliminarCategoria } = require('../controllers/categoryController');
const categoriaRouter = express.Router();

categoriaRouter.post('/', crearCategoria);
categoriaRouter.get('/', obtenerCategorias);
categoriaRouter.get('/:id', obtenerCategoriaPorId);
categoriaRouter.put('/:id', actualizarCategoria);
categoriaRouter.delete('/:id', eliminarCategoria);

module.exports = categoriaRouter;
