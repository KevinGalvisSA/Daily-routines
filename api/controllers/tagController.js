const Etiqueta = require('../models/etiquetaModel');

// Crear etiqueta
exports.crearEtiqueta = async (req, res) => {
    const { actividades_fk, nombre, categoria_fk } = req.body;
    try {
        const nuevaEtiqueta = new Etiqueta({
            actividades_fk,
            nombre,
            categoria_fk
        });
        await nuevaEtiqueta.save();
        res.status(201).json({ message: 'Etiqueta creada con éxito', etiqueta: nuevaEtiqueta });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear etiqueta', error });
    }
};
