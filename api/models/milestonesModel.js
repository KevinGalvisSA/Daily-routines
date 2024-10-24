const mongoose = require('mongoose');

const hitoSchema = new mongoose.Schema({
    objetivo_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Objetivo', required: true },
    descripcion: { type: String, required: true },
    fecha_de_creacion: { type: Date, default: Date.now },
    completado: { type: Boolean, default: false }
}, { versionKey: false });

const Hito = mongoose.model('Hito', hitoSchema);
module.exports = Hito;
