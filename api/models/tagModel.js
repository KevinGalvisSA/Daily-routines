const mongoose = require('mongoose');

const etiquetaSchema = new mongoose.Schema({
    actividades_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
    nombre: { type: String, required: true },
    categoria: [{ type: String }]
}, { versionKey: false });

const Etiqueta = mongoose.model('Etiqueta', etiquetaSchema, 'Etiqueta');
module.exports = Etiqueta;
