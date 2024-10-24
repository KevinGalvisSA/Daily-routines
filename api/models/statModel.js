const mongoose = require('mongoose');

const estadisticaSchema = new mongoose.Schema({
    usuario_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha_de_la_estadistica: { type: Date, default: Date.now },
    actividades_completadas: { type: Number },
    objetivos_completados: { type: Number }
}, { versionKey: false });

const Estadistica = mongoose.model('Estadistica', estadisticaSchema, 'Estadistica');
module.exports = Estadistica;
