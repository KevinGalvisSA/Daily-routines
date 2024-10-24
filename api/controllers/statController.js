const Estadistica = require('../models/estadisticaModel');

// Crear estadística
exports.crearEstadistica = async (req, res) => {
    const { usuario_fk, actividades_completadas, objetivos_completados } = req.body;
    try {
        const nuevaEstadistica = new Estadistica({
            usuario_fk,
            actividades_completadas,
            objetivos_completados
        });
        await nuevaEstadistica.save();
        res.status(201).json({ message: 'Estadística creada con éxito', estadistica: nuevaEstadistica });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear estadística', error });
    }
};
