const express = require("express");
const app = express();
const PORT = 3000;

const db_bicis = [
  { id: 1, marca: "Trek", color: "Rojo" },
  { id: 2, marca: "Giant", color: "Azul" },
  { id: 3, marca: "Specialized", color: "Negro" },
];

const db_triciclos = [
  { id: 1, marca: "Bicicleta de Tres Ruedas", color: "Rojo" },
  { id: 2, marca: "Triciclo Infantil", color: "Azul" },
  { id: 3, marca: "Triciclo de Carga", color: "Negro" },
];

/*
app {
get
post
put
delete
...
use <- MIDDLEWARE
listen <- Para levantar el servidor

}
*/
app.get("/", (req, res) => {
  // res.send("<h1>HOLA MUNDO</h1>");
  
    try {
      const style = `
      body {
        font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
      }
      a {
        display: inline-block;
          margin: 10px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          text-decoration: none;
          border-radius: 5px;
      }
      a:hover {
        background-color: #45a049;
      }
      `;
      const html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Mi Primer Server</title>
          <style>
              ${style}
          </style>
      </head>
      <body>
          <h1>Bienvenido a la tienda de bicicletas</h1>
          <a href="/api/bicicletas">Ver Bicicletas</a>
          <a href="/api/triciclos">Ver Triciclos</a>
      </body>
      </html>
      `;
      res.status(200).send(html);
    } catch (error) {
      res.status(500).json({ error: "Error al cargar la página principal" });
    }
});

//* ROUTES

//* Todas las bicicletas
app.get("/api/bicicletas", (req, res) => {
  try {
    console.log("--req--> ", req)
    res.status(200).json(db_bicis);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las bicicletas" });
  }
});

//* Bici por ID por params
app.get("/api/bicicletas/:id", (req, res) => { // server :id <- defino la key
  const { id } = req.params;
  //                                           key   cliente
  // console.log("--req--> ", req.params) -> { id: undefined }
  const bici = db_bicis.find((b) => b.id === parseInt(id));
  if (bici) {
    res.status(200).json(bici);
  } else {
    res.status(404).json({ error: "Bicicleta no encontrada" });
  }
});

//* Bici por ID por query

app.get("/api/triciclos", (req, res) => {
  try {
    res.status(200).json(db_triciclos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los triciclos" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

/*

request -> petición REQ 

req {

  params -> {}

  query -> {}
  body -> {}
  }

*/