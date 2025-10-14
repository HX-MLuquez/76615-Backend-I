// let const
var name = "Pepe";
let nameBloque = "por bloque";
const inmutable = 3339;

const mutableLoDeAdentro = []; // {}

// parametros por default

function sumar(a = 1, b = 0) {
  return a + b;
}

// ...  <- SPREAD

// ``

const lindaData = `${name} es ${nameBloque}`;

// class
class Persona {}

// Promises
// new Promise();

// map

const lista = [2, 65, 42];

const result = lista.map((e) => {
  if (e !== 65) {
    return `<div>${e}</div>`;
  } else {
    return `<></>`;
  }
});

console.log(result);