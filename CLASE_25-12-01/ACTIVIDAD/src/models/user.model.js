const mongoose = require("mongoose");

//* Definimos el Schema

//! |***********************|
//* |***********************|
//! |****** CODE AQUI ******|
//* |***********************|
//! |***********************|

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
    default: "Introducción al bootcamp",
  },
  grade: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: null, // Campo para almacenar la ruta de la imagen
  },
});

//*                            'users'
module.exports = mongoose.model("User", userSchema);

/*

const User = require("../models/user.model");

User {

find
findById
findOne
findByIdAndUpdate
update
findByIdAndDelete
delete

}

*/