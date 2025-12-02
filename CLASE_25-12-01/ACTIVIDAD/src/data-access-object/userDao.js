const User = require("../models/user.model"); // => User {...}
const Admin = require("../models/admin.model"); // => Admin {...}
const mongoose = require("mongoose");

class UserManager {
  async createUser(data) {
    try {
      if (!data) throw new Error("Datos de usuario no proporcionados");
      // const newUser = new User(data);
      // //* Validar ---> if (data.image) {
      // await newUser.save();

      const newUser = await User.create(data);
      return newUser;
      //* Otra opción es usar User.create(data);
      /*
      const newUser = await User.create(data);

      */
    } catch (error) {
      console.error("Error creando usuario:", error);
      throw new Error("Error al crear usuario");
    }
  }

  async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      throw new Error("Error al obtener usuarios");
    }
  }

  async getUserById(id) {
    try {
      if (!id) throw new Error("ID no proporcionado");
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      throw new Error("Error al obtener usuario por ID");
    }
  }

  async getUserByDni(dni) {
    try {
      return await User.findOne({ dni });
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
      // userOld{data} -> userNew{data}                           userNew{data}
      //                                       ¿quién?¿qué datos? que devuelva el nuevo}
      const userUpdated = await User.findByIdAndUpdate(id, data, { new: true }); // 1 || 0 -> userOld{data}
      return userUpdated;
    } catch (error) {
      console.error("Error actualizando:", error);
      throw new Error("Error al actualizar");
    }
  }

  async deleteUserById(id) {
    try {
      const userDelete = await User.findByIdAndDelete(id);
      return userDelete;
    } catch (error) {
      console.error("Error eliminando:", error.message);
      return null;
    }
  }

  //* Soft Delete
  async softDeleteUserById(id) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("ID no válido");
      }
      const userSoftDeleted = await User.findByIdAndUpdate(
        id,
        { deleted: true },
        { new: true }
      );
      return userSoftDeleted;
    } catch (error) {
      console.error("Error en soft delete:", error);
      throw new Error("Error al realizar soft delete");
    }
  }
}

module.exports = UserManager;
