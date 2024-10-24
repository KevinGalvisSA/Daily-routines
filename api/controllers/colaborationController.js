const Colaboracion = require('../models/colaborationModel');

// Asignar colaborador a una actividad
exports.asignarColaborador = async (req, res) => {
    try {
        const nuevaColaboracion = new Colaboracion(req.body);
        await nuevaColaboracion.save();
        res.status(201).json({ message: 'Colaborador asignado con éxito', colaboracion: nuevaColaboracion });
    } catch (error) {
        res.status(500).json({ message: 'Error al asignar colaborador', error });
    }
};

// Obtener colaboradores de una actividad específica
exports.obtenerColaboradoresPorActividad = async (req, res) => {
    try {
        const colaboradores = await Colaboracion.find({ actividad_fk: req.params.id }).populate('usuario_fk');
        res.status(200).json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener colaboradores', error });
    }
};
