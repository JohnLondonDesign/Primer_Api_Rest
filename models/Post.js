const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true
  },
  apellido: {
    type: String,
    require: true
  },
  cedula: {
    type: Number,
    require: true
  },
  telefono: {
    type: Number,
    require: true
  },
  pais: {
    type: String,
    require: true
  },
  ciudad: {
    type: String,
    require: true
  },
  direccion:{
    type: String,
    require: true
},
  fecha: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('post', PostSchema);
