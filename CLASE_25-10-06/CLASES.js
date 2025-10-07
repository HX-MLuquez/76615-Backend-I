//* CLASES

//* THIS es un PUNTERO que por defecto apunta al GLOBAL y tienen todas las variables
var nombre = "Marta";

const personaObjeto = {
  //* Esta es la data a moldear
  nombre: "Pepe",
  edad: 21,
  peso: 87,
  //* Acá tenemos los métodos que van a interactuar a la data
  getNombre: function () {
    console.log("Soy " + this.nombre); // Soy Pepe
  },
  getEdad: function () {
    console.log("tengo " + this.edad); // Tengo 21
  },
};

personaObjeto.getNombre();
personaObjeto.getEdad()
//* Es una plantilla que tiene datos y funciones (métodos) a fines de esos datos


class Socio {
  #dni
  static iva
  constructor(nombre, edad = 18, dni=null){
    this.nombre = nombre
    this.edad = edad
    this.#dni = dni
  }
  getNombre(){
    return this.nombre
  }
  cambioEdad(edad_nueva){
    this.edad = edad_nueva
    return this.nombre + " " + this.edad
  }

}

// INSTANCIAMOS
const socioA = new Socio("Pepe")

console.log(socioA)

const socioB = new Socio("Juan")

console.log(socioB)

const socioC = new Socio("Maria", 21)

console.log(socioC)

console.log(socioC.getNombre())

console.log(socioC.cambioEdad(31))

console.log(socioC)