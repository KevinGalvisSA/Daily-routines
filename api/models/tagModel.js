const mongoose = require('mongoose');

const etiquetaSchema = new mongoose.Schema({
    actividades_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
    nombre: { type: String, required: true },
    categoria_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
}, { versionKey: false });

const Etiqueta = mongoose.model('Etiqueta', etiquetaSchema);
module.exports = Etiqueta;
