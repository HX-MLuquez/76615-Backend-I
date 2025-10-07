//* MUTABILIDAD
// const edad = 5
// edad = 7

const objetoObjeto = {
  nombre: "Pepe",
  edad: 32,
};

const objetoArray = ["001", "002"];
console.log(objetoArray);

//-----

const sumar = function () {};

const CONSTANTES_CONSTANTES = 213;
const PORT = 213;
const KEY = "ñlsfsdr908w{porjawr";

const persona = {
  edad: 0,
  nombre: "",
  apellido: "",
};
const copy_persona = persona
const clone_persona = {...persona}
// persona = []   X
// persona = 324324  X

console.log(persona);
persona.nombre = "Pepe";
console.log(persona);
persona.altura = 99;
console.log(persona);

const listas_const = [22,2345,34345,2342]
listas_const[6] = "Pepe"
console.log(listas_const);

console.log(copy_persona);
copy_persona.nanana = 999999
console.log(persona)


var oto_obj = {a:1,b:2}
oto_obj = {}

console.log(clone_persona)


let ancho = 22

ancho = 88

ancho = "wewew"