const Reporte = require('../models/reportModel');

// Crear reporte
exports.crearReporte = async (req, res) => {
    const { usuario_fk, tipo_reporte, fecha_inicio, fecha_fin, actividades_completadas, objetivos_completados } = req.body;
    try {
        const nuevoReporte = new Reporte({
            usuario_fk,
            tipo_reporte,
            fecha_inicio,
            fecha_fin,
            actividades_completadas,
            objetivos_completados
        });
        await nuevoReporte.save();
        res.status(201).json({ message: 'Reporte creado con éxito', reporte: nuevoReporte });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear reporte', error });
    }
};
