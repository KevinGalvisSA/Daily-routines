const Objetivo = require('../models/objectiveModel');

// Crear un nuevo objetivo
exports.crearObjetivo = async (req, res) => {
    try {
        const nuevoObjetivo = new Objetivo(req.body);
        await nuevoObjetivo.save();
        res.status(201).json({ message: 'Objetivo creado con éxito', objetivo: nuevoObjetivo });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el objetivo', error });
    }
};

// Obtener todos los objetivos
exports.obtenerObjetivos = async (req, res) => {
    try {
        const objetivos = await Objetivo.find();
        res.status(200).json(objetivos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los objetivos', error });
    }
};

// Obtener un objetivo específico por ID
exports.obtenerObjetivoPorId = async (req, res) => {
    try {
        const objetivo = await Objetivo.findById(req.params.id);
        if (!objetivo) return res.status(404).json({ message: 'Objetivo no encontrado' });
        res.status(200).json(objetivo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el objetivo', error });
    }
};

// Actualizar un objetivo por ID
exports.actualizarObjetivo = async (req, res) => {
    try {
        const objetivoActualizado = await Objetivo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!objetivoActualizado) return res.status(404).json({ message: 'Objetivo no encontrado' });
        res.status(200).json({ message: 'Objetivo actualizado', objetivo: objetivoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el objetivo', error });
    }
};

// Eliminar un objetivo por ID
exports.eliminarObjetivo = async (req, res) => {
    try {
        const objetivoEliminado = await Objetivo.findByIdAndDelete(req.params.id);
        if (!objetivoEliminado) return res.status(404).json({ message: 'Objetivo no encontrado' });
        res.status(200).json({ message: 'Objetivo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el objetivo', error });
    }
};
