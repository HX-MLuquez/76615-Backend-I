const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
//   email:{
//     type: String,
//     unique: true,  //* Índice único
//     required: true,
//     index: true
//   }
  phone: String,
  gender: String,
});

userSchema.index({ email: 1 }); //* Índice en el campo email

module.exports = mongoose.model("User", userSchema);

/*

Buscas un user por el email, entre miles de usuarios esa búsqueda será mucho más rápida

*/
