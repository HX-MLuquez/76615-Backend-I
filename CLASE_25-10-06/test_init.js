// free;
// console.log(free); // ReferenceError: free is not defined
// free = "sas";
// console.log(free);


/*
# Compilado 

# Interpretar


# Transpilar

*/
var title = "Hola tigre";
if (true) {
  /*
Esto no crea una nueva variable, sino que reutiliza la variable title global 
(porque var no respeta el bloque if). Así que la reasigna a "Hola Mundo".
Es como escribir title = "Hola Mundo" sin el var (cambiando el valor de la variable global)
*/
  var title = "Hola Mundo";
  console.log(title); // Hola Mundo
}

if (true) {
  let title = "Hola perro";
  console.log(title); // Hola perro
}

console.log(title); // Hola Mundo

/*
var title = "Hola tigre";
if (true) {
var title = "Hola Mundo"; 
console.log(title); 
}

if (true) {
let title = "Hola perro";
console.log(title); 
}

console.log(title); 
*/

var nombre = 12;

nombre = "wewe";

console.log(nombre);

let edad = 12;

edad = "wewe";

console.log(edad);

//* CONST - obj - array - funct

const lista = [];

lista[1] = "perro";

console.log(lista);

// const valorFijo = "Casa"
// valorFijo = "dto" //! Assignment to constant variable

function mult(a, b) {
  const result = a * b;
  return result;
}
//* OBJETO -> { }

console.log(mult(7, 8));
mult.queeee = "vaya sabe que"
console.log(mult.queeee);

const objetoPosta = {
  nombre: "Coco",
  apellido: "Lopez",
};
console.log(objetoPosta)
objetoPosta.edad = 101
console.log(objetoPosta)


//* LET BLOQUE (y dentro de las funciones)

//* VAR global

/*
VOLVEMOS a las 21:49
*/