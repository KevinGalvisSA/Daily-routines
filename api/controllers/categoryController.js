const Categoria = require('../models/categoryModel');

// Crear una nueva categoría
exports.crearCategoria = async (req, res) => {
    try {
        const nuevaCategoria = new Categoria(req.body);
        await nuevaCategoria.save();
        res.status(201).json({ message: 'Categoría creada con éxito', categoria: nuevaCategoria });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría', error });
    }
};

// Obtener todas las categorías
exports.obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
};

// Obtener una categoría específica por ID
exports.obtenerCategoriaPorId = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
};

// Actualizar una categoría por ID
exports.actualizarCategoria = async (req, res) => {
    try {
        const categoriaActualizada = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!categoriaActualizada) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría actualizada', categoria: categoriaActualizada });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
};

// Eliminar una categoría por ID
exports.eliminarCategoria = async (req, res) => {
    try {
        const categoriaEliminada = await Categoria.findByIdAndDelete(req.params.id);
        if (!categoriaEliminada) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
};
