const User = require("../models/user.model");
const mongoose = require("mongoose");

class UserManager {
  async createUser(data) {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
    try {
      if (!data) throw new Error("Datos de usuario no proporcionados");
      const newUser = new User(data);
      await newUser.save();
      return newUser;
    } catch (error) {
      console.error("Error creando usuario:", error);
      throw new Error("Error al crear usuario");
    }
  }

  async getAllUsers() {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
    try {
      const users = await User.find(
        {},
        "firstName lastName course grade image"
      );
      return users;
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      throw new Error("Error al obtener usuarios");
    }
  }

  async getUserById(id) {
    //! |***********************|
    //* |***********************|
    //! |****** CODE AQUI ******|
    //* |***********************|
    //! |***********************|
    try {
      if (!id) throw new Error("ID no proporcionado");
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      return null;
    }
  }

  async getUserByDni(dni) {
    try {
      const user = await User.findOne({ dni });
      if (!user) throw new Error("User no encontrado");
      return user;
    } catch (error) {
      console.error("Error buscando por DNI:", error);
      return null;
    }
  }

  async updateUserById(id, data) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
      return updateUser
    } catch (error) {
      console.error("Error actualizando:", error);
      throw new Error("Error al actualizar");
    }
  }

  async deleteUserById(id) {
    try {
      const userDelete = await User.findByIdAndDelete(id);
      return userDelete
    } catch (error) {
      console.error("Error eliminando:", error.message);
      return null;
    }
  }
}

module.exports = UserManager;
