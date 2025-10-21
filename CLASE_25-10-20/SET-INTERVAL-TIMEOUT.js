// SetTimeout vs SetInterval

console.log("Inicio del programa");

setTimeout(() => {
  console.log("Primer timeout");
}, 3000);

setTimeout(() => {
  console.log("Segundo timeout");
}, 0);

// ---

let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log("Contador:", contador);
  if (contador === 5) {
    clearInterval(intervalo);
  }
}, 1000);

console.log("Fin del programa");

// Vamos a seguir buenas prácticas y usar el setTimeout dentro de una promesa + async/await + try/catch en lugar de callbacks para evitar el "callback hell"

function esperarSegundos(segundos) {
  return new Promise((resolve, reject) => {
    if (typeof segundos !== "number" || segundos < 0) {
      return reject("El parámetro debe ser un número positivo");
    }
    setTimeout(() => {
      resolve(`Esperé ${segundos} segundos`);
    }, segundos * 1000);
  });
}
async function ejecutarEspera() {
  try {
    const resultado = await esperarSegundos(2);
    console.log(resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

ejecutarEspera();
