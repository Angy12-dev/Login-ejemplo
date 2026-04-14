const mongoose = require('mongoose');
// Definir el esquema para el usuario
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    clave: { type: String, required: true }
});
// Crear el modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;