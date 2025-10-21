const { sumar } = require("./utils");

const axios = require("axios");

//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con fetch
async function fetchData() {
  // async <- indica que la function va a ser una promesa
  try {
    const { data } = await axios(
      // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
    console.log("01", data[0]);
    return data[0];
  } catch (error) {
    console.log("01 error", error);
  }
}

async function otraFuncion() {
  const resulDATA = await fetchData();
  console.log("0111", resulDATA); // Promise { <pending> }
}
otraFuncion()
//* Realizamos una peticion a una API para obtener datos - Ejemplo de una promesa que se resuelve con AXIOS
async function myFuncion() {
  return "saludo";
}
console.log("02", myFuncion); // ->  Promise { <pending> }

//* Promise

var miPromesa = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Hola");
    } else {
      reject("chau");
    }
  }, 1000);
});

console.log("03 miPromesa: ", miPromesa); // Promise { <pending> }

//* .then(()=>{})   .catch(()=>{})
const respuetaPorFuera = miPromesa
  .then((value) => {
    console.log("04", value);
    return value + " " + "Mundo";
  })
  .then((value) => {
    console.log("05", value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("06 respuetaPorFuera --> ", respuetaPorFuera);

const holis = async () => {
  try {
    const { data } = await axios(
      // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
  } catch (error) {
    console.log(error);
  }
};

/*
LO ASYNC
Buscar datos en una API externa 
Buscar o trabajar datos en una DB

SON PROMESAS

para obtener los datos de esas PROMESAS usamos o .then((data)=>{data}) .catch

o 

async await pero con 
 try {
    const { data } = await axios(
      // await es una pause
      `https://akabab.github.io/starwars-api/api/all.json`
    );
  } catch (error) {
    console.log(error);
  }

*/
