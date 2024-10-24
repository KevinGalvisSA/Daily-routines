const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
    usuario_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String },
    estado: { type: String, enum: ['pendiente', 'en curso', 'completada'], default: 'pendiente' },
    prioridad: { type: String, enum: ['alta', 'media', 'baja'], required: true },
    fecha_de_creacion: { type: Date, default: Date.now },
    fecha_de_actualizacion: { type: Date }
}, { versionKey: false });

const Actividad = mongoose.model('Actividad', actividadSchema);
module.exports = Actividad;
