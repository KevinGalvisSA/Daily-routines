const Hito = require('../models/milestonesModel');

// Crear un hito
exports.crearHito = async (req, res) => {
    const { objetivo_fk, descripcion } = req.body;
    try {
        const nuevoHito = new Hito({
            objetivo_fk,
            descripcion
        });
        await nuevoHito.save();
        res.status(201).json({ message: 'Hito creado con éxito', hito: nuevoHito });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear hito', error });
    }
};

// Marcar un hito como completado
exports.completarHito = async (req, res) => {
    const { id } = req.params;
    try {
        const hitoActualizado = await Hito.findByIdAndUpdate(id, { completado: true }, { new: true });
        if (!hitoActualizado) return res.status(404).json({ message: 'Hito no encontrado' });
        res.status(200).json({ message: 'Hito completado', hito: hitoActualizado });
    } catch (error) {
        res.status(500).json({ message: 'Error al completar hito', error });
    }
};
