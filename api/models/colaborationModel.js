const mongoose = require('mongoose');

const colaboracionSchema = new mongoose.Schema({
    actividad_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
    usuario_fk: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    rol: { type: String, enum: ['creador', 'colaborador'], required: true }
}, { versionKey: false });

const Colaboracion = mongoose.model('Colaboracion', colaboracionSchema);
module.exports = Colaboracion;
