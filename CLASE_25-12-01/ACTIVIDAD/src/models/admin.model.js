//* IMPORTAMOS MONGOOSE */
const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
});

module.exports = mongoose.model("Admin", adminSchema); // Exportamos el modelo Admin -> module.exports => Admin