const mongoose = require('mongoose');

const objetivoSchema = new mongoose.Schema({
    usuario_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    title: { type: String, required: true },
    description: { type: String },
    fecha_de_vencimiento: { type: Date },
    estado: { type: String, enum: ['pendiente', 'completado'], default: 'pendiente' }
}, { versionKey: false });

const Objetivo = mongoose.model('Objetivo', objetivoSchema, 'Objetivo');
module.exports = Objetivo;
