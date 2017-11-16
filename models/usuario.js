const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    nombre: { type: String },
    password: { type: String }
});


let usuarioModel = mongoose.model('Usuario', usuarioSchema);


module.exports = usuarioModel;
