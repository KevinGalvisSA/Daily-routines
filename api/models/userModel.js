const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nombre_usuario: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    fecha_de_creacion: { type: Date, default: Date.now }
}, { versionKey: false });

// Encriptar contraseña antes de guardar
usuarioSchema.pre('save', async function(next) {
    if (!this.isModified('contraseña')) return next();
    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt);
    next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
