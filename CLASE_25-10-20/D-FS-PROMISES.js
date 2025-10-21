//* fs.promises

const fs = require("fs");
// o const fs = require("fs").promises
// 1. readFile
// Para obtener el contenido de un archivo de manera asíncrona:

async function leerArchivo() {
  try {
    const data = await fs.promises.readFile("textito.txt", "utf8");
    // 'utf8' para Argentina, pero para Rusia es 'utf-16le' y para Japon 'shift_jis'
    console.log(data);
  } catch (error) {
    console.error("Error al leer el archivo:", err);
  }
}


/*
leerArchivo() -> data <- Usuarios.json
[
    {"nombre": "Juan", "edad": 30},
    {"nombre": "María", "edad": 25}
]

const userNew = {nombre: "Pepe", "edad": 15}
data.push(userNew)
[
    {"nombre": "Juan", "edad": 30},
    {"nombre": "María", "edad": 25},
    {"nombre": "Pepe", "edad": 15}
]

escribirArchivo(data) <- Usuarios.json
*/

// 2. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

async function agregarContenido() {
  try {
    await fs.promises.appendFile("textito.txt", "\nContenido adicional");
    console.log("Contenido añadido al archivo.");
  } catch (error) {
    console.error("Error al agregar contenido:", error);
  }
}

// 3. unlink
// Para eliminar un archivo de manera asíncrona:

async function eliminarArchivo() {
  const filePath = "textito.txt";
  try {
    await fs.promises.unlink(filePath);
    console.log(`Archivo ${filePath} eliminado.`);
  } catch (error) {
    console.error("Error al eliminar el archivo:", error);
  }
}

// 4. exists
// Para verificar si un archivo existe de manera asíncrona:

async function verificarExistencia() {
  const filePath = "textito.txt";
  try {
    await fs.promises.access(filePath);
    console.log(`El archivo ${filePath} existe.`);
  } catch (error) {
    console.error(`El archivo ${filePath} no existe.`);
  }
}

async function verificarExistencia() {
  const filePath = "";
}

// 5. writeFile
// Para crear y escribir contenido en un archivo de manera asíncrona:

async function escribirArchivo(content) {
  try {
    
    await fs.promises.writeFile("textito.txt", content);

    console.log("Archivo creado y contenido añadido.");
  } catch (error) {
    console.error("Error al escribir el archivo:", err);
  }
}

// Función principal para ejecutar las operaciones
async function main() {
  await escribirArchivo();
  await leerArchivo();
  // await agregarContenido();
  // await verificarExistencia();
  // await eliminarArchivo();
}

// Llamar a la función principal
main();

//! escribirArchivo();
//! leerArchivo();
//! agregarContenido();
//! verificarExistencia();
//! eliminarArchivo();
