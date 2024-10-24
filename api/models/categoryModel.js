const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true }
}, { versionKey: false });

const Categoria = mongoose.model('Categoria', categoriaSchema);
module.exports = Categoria;
