const Etiqueta = require('../models/tagModel');

// Crear etiqueta
exports.crearEtiqueta = async (req, res) => {
    const { actividades_fk, nombre, categoria } = req.body;
    try {
        const nuevaEtiqueta = new Etiqueta({
            actividades_fk,
            nombre,
            categoria
        });
        await nuevaEtiqueta.save();
        res.status(201).json({ message: 'Etiqueta creada con éxito', etiqueta: nuevaEtiqueta });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear etiqueta', error });
    }
};
