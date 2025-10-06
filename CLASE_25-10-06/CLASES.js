//* CLASES

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
};

personaObjeto.getNombre();

//* Es una plantilla que tiene datos y funciones (métodos) a fines de esos datos
