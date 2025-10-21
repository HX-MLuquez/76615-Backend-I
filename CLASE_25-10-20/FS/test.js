const fs = require("fs");
// o const fs = require("fs").promises
// 1. readFile
// Para obtener el contenido de un archivo de manera asíncrona:

const newUser = { nombre: "Pepe", edad: 15 };

async function leerArchivo(dir) {
  try {
    const data = await fs.promises.readFile(dir, "utf8");
    // 'utf8' para Argentina, pero para Rusia es 'utf-16le' y para Japon 'shift_jis'
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

async function escribirArchivo(dir, content) {
  try {
    await fs.promises.writeFile(dir, content);

    console.log("Archivo creado y contenido añadido.");
  } catch (error) {
    console.error("Error al escribir el archivo:", error);
  }
}

async function agregarUser() {
  try {
    const data = await leerArchivo("Usuarios.json");
    const users = JSON.parse(data); // pasamos de string (JSON) a objeto
    users.push(newUser);
    await escribirArchivo("Usuarios.json", JSON.stringify(users, null, 2)); // pasamos de objeto a string (JSON)
    console.log("Usuario agregado exitosamente.");
  } catch (error) {
    console.error("Error al agregar el usuario:", error);
  }
}

agregarUser();
