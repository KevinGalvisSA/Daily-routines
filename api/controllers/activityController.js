const Actividad = require('../models/activityModel');

// Crear actividad
exports.crearActividad = async (req, res) => {
    const { usuario_fk, titulo, descripcion, prioridad } = req.body;
    try {
        const nuevaActividad = new Actividad({
            usuario_fk,
            titulo,
            descripcion,
            prioridad
        });
        await nuevaActividad.save();
        res.status(201).json({ message: 'Actividad creada con éxito', actividad: nuevaActividad });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear actividad', error });
    }
};

// Actualizar actividad
exports.actualizarActividad = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, estado, prioridad } = req.body;
    try {
        const actividadActualizada = await Actividad.findByIdAndUpdate(
            id, 
            { titulo, descripcion, estado, prioridad, fecha_de_actualizacion: Date.now() }, 
            { new: true }
        );
        if (!actividadActualizada) return res.status(404).json({ message: 'Actividad no encontrada' });
        res.status(200).json({ message: 'Actividad actualizada con éxito', actividad: actividadActualizada });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar actividad', error });
    }
};
