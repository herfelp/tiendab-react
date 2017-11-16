const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let itemSchema = new Schema({
    nombre_: { type: String },
    nombre: { type: String },
    precio: { type: Number },
    qt: { type: Number },
    imagen: { type: String }
});


let itemModel = mongoose.model('Item', itemSchema);


module.exports = itemModel;
