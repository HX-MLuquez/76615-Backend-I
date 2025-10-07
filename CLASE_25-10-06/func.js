function holis() {
  console.log("hiiiiiiii");
  return "hola mundo";
}
console.log(holis);
holis();

holis.mas_data = {
  edad: 21,
  juju: "naaaaaa",
};
console.log(holis); // [Function: holis] { mas_data: { edad: 21, juju: 'naaaaaa' } }
console.log(holis());

console.log(holis.mas_data.edad);
//* FUNCIONES

// Declaramos

function sumar(a, b) {
  return a + b;
}

// Expresiva

/*
var   si se cambia 
let   si se cambia   - por bloque - nace y muer en un bloque

const <- inmutable <- constante
*/
let altura = 23;

if (true) {
  let altura = 2;
}
const list = []
for (let index = 0; index < list.length; index++) {
  const element = list[index];
  let altura = 33;
}

function otroBloque() {
  let altura = 109;
  function otra() {
    let altura = 1;
    console.log(altura)
  }
  console.log(altura)
  otra();
}

otroBloque()
console.log("----->", global)

const multiplicar = function (a, b) {
  return a * b;
};

// Arrow func - funciones flechas
const nombreFuncSumar = (a, b) => a + b; // en una línea el return está sin q lo escriba

const nombreFuncRestar = (a, b) => {
  const resultado = a - b;
  return resultado;
};

//----------------------

var total = 0;
console.log(total);
function calcular(a, b, c) {
  var result = a + b + c;
  total = total + result;
}

calcular(3, 2, 4);
console.log(total);

calcular(2, 2, 2);
console.log(total);

/*
         input
funct (parámetros){
return -> algo <- output
}



*/

const dni = 1234 
console.log(dni)


//************************************
// 
var bebe = "bebe"


function otroBloqueB() {
  let bebe = 109;
  function otraB() {
    bebe = 1;
    console.log(bebe)
  }
  otraB();
  console.log(bebe)
}
otroBloqueB()

console.log(bebe)
