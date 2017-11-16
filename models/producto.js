const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let productoSchema = new Schema({
    nombre_: { type: String },
    nombre: { type: String },
    precio: { type: Number },
    cantidad: { type: Number },
    imagen: { type: String }
});


let productoModel = mongoose.model('Producto', productoSchema);


module.exports = productoModel;
