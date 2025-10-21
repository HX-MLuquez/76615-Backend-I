//* HANDS 2

// UsersManager.js
// import fs from "fs/promises";
// import crypto from "crypto";
const fs = require("fs/promises");
const crypto = require("crypto");
const path = require("path");

const filePath = path.join(__dirname, "data", "Usuarios.json");
//* CRUD - Métodos Crear Leer Actualizar Eliminar

class UsersManager {
  constructor(filePath) {
    this.filePath = filePath;
  }
  async #readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  }
  async #writeFile(users) {
    try {
      console.log(this.filePath);
      await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
    } catch (error) {
      console.error("Error al escribir el archivo:", error);
    }
  }
  //* CREATE - CREAR - POST
  async addUser({ nombre, apellido, edad, curso = "Back I" }) {
    try {
      if (!nombre || !apellido || !edad) {
        throw new Error(
          "Todos los campos (nombre, apellido, edad) son obligatorios."
        );
      }
      const users = await this.#readFile();
      const newUser = {
        id: crypto.randomUUID(),
        nombre, // nombre: nombre <- object literal
        apellido,
        edad,
        curso,
      };
      users.push(newUser);
      await this.#writeFile(users);
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  }
  //* LEER TODOS los USUARIOS - LEER - GET
  async getAllUsers() {
    try {
      const users = await this.#readFile();
      console.log("users-->", users);
      return users;
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }

  //* BUSCAR USUARIO POR ID - LEER - GET
  async getUserById(id) {
    try {
      const users = await this.#readFile();
      const user = users.find((u) => u.id === id || null);
      console.log("user->", user);
      if (!user) {
        console.log("Id incorrecto");
        return;
      }
      return user;
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }

  //* ACTUALIZAR UN USUARIO POR ID - Actualizar - PUT
  //                      {},           id
  async updateUserById(dataUpdateUser, id) {
    try {
      // Buscar el user por id
      const users = await this.#readFile();
      const searchUser = users.find((u) => u.id === id || null);
      if (!searchUser) {
        console.log("Id incorrecto");
      }
      const user = {
        ...searchUser,
        dataUpdateUser,
      };
      // cargar el user actualizado
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }

  //* ELIMINAR UN USUARIO POR ID - Eliminar - DELETE
  async deleteUserById(id) {
    try {
      // Por el ID vamos buscamos y si encontramos eliminamos
    } catch (error) {
      console.error("Error al buscar todos los usuarios:", error);
    }
  }
}

const managerUser = new UsersManager(filePath);

managerUser.addUser({
  nombre: "Poli",
  apellido: "Lopez",
  edad: 34,
});
// managerUser.getAllUsers();
managerUser.getUserById("bb3abf26-a9f2-42ea-9d59-dd7b56d43433");
