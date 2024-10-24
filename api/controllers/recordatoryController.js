const Recordatorio = require('../models/recordatoryModel');

// Crear un nuevo recordatorio
exports.crearRecordatorio = async (req, res) => {
    try {
        const nuevoRecordatorio = new Recordatorio(req.body);
        await nuevoRecordatorio.save();
        res.status(201).json({ message: 'Recordatorio creado con éxito', recordatorio: nuevoRecordatorio });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el recordatorio', error });
    }
};

// Obtener todos los recordatorios
exports.obtenerRecordatorios = async (req, res) => {
    try {
        const recordatorios = await Recordatorio.find();
        res.status(200).json(recordatorios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los recordatorios', error });
    }
};

// Obtener un recordatorio específico por ID
exports.obtenerRecordatorioPorId = async (req, res) => {
    try {
        const recordatorio = await Recordatorio.findById(req.params.id);
        if (!recordatorio) return res.status(404).json({ message: 'Recordatorio no encontrado' });
        res.status(200).json(recordatorio);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el recordatorio', error });
    }
};

// Actualizar un recordatorio por ID
exports.actualizarRecordatorio = async (req, res) => {
    try {
        const recordatorioActualizado = await Recordatorio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recordatorioActualizado) return res.status(404).json({ message: 'Recordatorio no encontrado' });
        res.status(200).json({ message: 'Recordatorio actualizado', recordatorio: recordatorioActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el recordatorio', error });
    }
};

// Eliminar un recordatorio por ID
exports.eliminarRecordatorio = async (req, res) => {
    try {
        const recordatorioEliminado = await Recordatorio.findByIdAndDelete(req.params.id);
        if (!recordatorioEliminado) return res.status(404).json({ message: 'Recordatorio no encontrado' });
        res.status(200).json({ message: 'Recordatorio eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el recordatorio', error });
    }
};
