//* module path es nativo de NODE y no necesitamos instalar
const path = require("path");

console.log("__dirname:", __dirname);
// C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\76615 BACK-I LUNES 20-30\76615-CLASE\CLASE_25-10-20

const rutaArchivo = path.join(__dirname, "data", "archi.txt");
// __dirname: C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\76615 BACK-I LUNES 20-30\76615-CLASE\CLASE_25-10-20
// Ruta final: C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\76615 BACK-I LUNES 20-30\76615-CLASE\CLASE_25-10-20\data\archi.txt
console.log("Ruta final:", rutaArchivo);


//--------

const rutaArchivoDinamic = function (nameFile) {
  const mypath = path.join(__dirname, "data", nameFile);
  return mypath;
};

/*

path.join("pepe", "juju", "texto.txt") -> "pepe/juju/texto.txt";

*/