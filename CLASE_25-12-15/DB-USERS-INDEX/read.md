


userA {
  first_name: "Pepe",
  //* Podemos indexar un campo de la siguiente manera:
  //   first_name: {
  //     type: String,
       index: true
  //   },
  last_name: "Lopez",
  email: "juju",
  phone: 123,
  age: 12,
}

users 5.000.000  hay 100 Pepes

SIN INDEX
SEARCH --->   Pepe <-   click   <- 100 seg 


CON INDEX
SEARCH --->   Pepe <- 