const { de } = require("@faker-js/faker");


//* IMPORTAMOS MONGOOSE */
const mongoose = require("mongoose");

//* Definimos el Schema

//*  SCHEMA userSchema  <->  MODEL User  <->  COLLECTION users ([]) 

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
    default: "Fullstack",
  },
  grade: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: null, // Campo para almacenar la ruta de la imagen
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema); // Exportamos el modelo User -> module.exports => User
