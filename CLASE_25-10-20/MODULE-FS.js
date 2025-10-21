//* MODULE FS de NODE 'crypto' <- CORE NODE
const fs = require("fs");

// o const fs = require("fs").promises

const path = require("path");

console.log("__dirname:", __dirname);
// c:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\[ 76525 BACK-I MIERC 10-00 ]\76525-CLASE\CLASE_25-08-13

const rutaArchivo = path.join(__dirname, "data", "archi.txt");

async function readFileMIO() {
  try {
    const data = await fs.promises.readFile(rutaArchivo, "utf-8");
    console.log("-data->", data);
    return data;
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

async function writeFile() { //* SOBRE-ESCRIBE
  try {
    const data = await readFileMIO()
    const message = "\n Pepepppppp vide";
    await fs.promises.writeFile(rutaArchivo, data + message);

    console.log("archivo creado exitosamente");
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

// const result = readFileMIO();
// console.log("-result->", result); //-> Promise { <pending> }

async function main() {
  const result = await readFileMIO(); 
  console.log("-result->", result); //-> Promise { <pending> }

  const resultZ = await writeFile();
  console.log("-resultZ->", resultZ); //->
}
main();
