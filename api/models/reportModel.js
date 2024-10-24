const mongoose = require('mongoose');

const reporteSchema = new mongoose.Schema({
    usuario_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    tipo_reporte: { type: String, enum: ['semanal', 'mensual'], required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    actividades_completadas: { type: Number },
    objetivos_completados: { type: Number }
}, { versionKey: false });

const Reporte = mongoose.model('Reporte', reporteSchema);
module.exports = Reporte;
