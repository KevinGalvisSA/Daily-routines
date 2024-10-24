const mongoose = require('mongoose');

const recordatorioSchema = new mongoose.Schema({
    actividad_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
    fecha_de_recordatorio: { type: Date, required: true },
    mensaje: { type: String }
}, { versionKey: false });

const Recordatorio = mongoose.model('Recordatorio', recordatorioSchema);
module.exports = Recordatorio;
