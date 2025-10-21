const path = require("path");

const rutaArchivoDinamic = function (nameFile) {
  const mypath = path.join(__dirname, "..", "data", nameFile);
  return mypath;
};

const result = rutaArchivoDinamic("Productos.json");
console.log("Ruta dinámica:", result);
/*
Ruta dinámica: C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\76615 BACK-I LUNES 20-30\76615-CL
ASE\CLASE_25-10-20\config\data\Productos.json

el error es que data es hermano de config y no hijo
  const mypath = path.join(__dirname, "..", "data", nameFile);
  return mypath;

  * Ahora si
Ruta dinámica: C:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\76615 BACK-I LUNES 20-30\76615-CL
ASE\CLASE_25-10-20\data\Productos.json
*/

module.exports = { rutaArchivoDinamic };
