const express = require("express");
const path = require("path");

//* MONGOOSE */ IMPORTAMOS MONGOOSE
const mongoose = require("mongoose");

const logger = require("morgan");

// require("dotenv").config();
// const MONGO_URI = process.env.MONGO_URI;
const config = require("./config");

const routes = require("./routes/index");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const { MONGO_URI_EXAMPLE, MONGO_URI_modelo, PEPE } = process.env;

//* CONNECT APP con DB-ATLAS mediante MONGOOSE

//  ██████████████████████████████████████████████████████████████
//  ███                                                        ███
//! ███    ████████████████████████████████████████████████    ███
//* ███    ███            ✨ CODE AQUI ✨              ███    ███
//! ███    ████████████████████████████████████████████████    ███
//  ███                                                        ███
//  ██████████████████████████████████████████████████████████████

//* Access a la IP de la machine nuestra
//*                                               :PASSWORD                                   /DB-NAME
//* mongodb+srv://mauriciogastoncoderhouse_db_user:<DB_PASSWORD>@cluster01.aolpvws.mongodb.net/school?retryWrites=true&w=majority&appName=Cluster01
mongoose
  .connect(config.database.uri) // .connect(MONGO_URI_EXAMPLE)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error(err));
// .connect("mongodb+srv://mauriciogastoncoderhouse_db_user:1234@cluster01.aolpvws.mongodb.net/local?appName=Cluster01")

//* MIDDELWARES
app.use(logger("dev"));
app.use(express.json()); // <- {} <- data en formato JSON por BODY
app.use(express.urlencoded({ extended: true })); // FORM <- {}

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Configurar la carpeta 'files' para servir archivos estáticos
app.use("/files", express.static(path.join(__dirname, "files")));

app.use("/api", routes);

// app.get("/", (req, res) => {
//   res.send("Hola mundo");
// });

// Implementar en '/' una vista html con estilos incluidos y un bttn que redirija a '/api' que brinda la lista de todos los usuarios

app.get("/", (req, res) => {
  try {
    const styles = `
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 50px;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
      }
    </style>
  `;
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Inicio</title>
      ${styles}
    </head>
    <body>
      <h1>Bienvenido a la API de Usuarios</h1>
      <button onclick="window.location.href='/api/users'">Ver Usuarios</button>
    </body>
    </html>
  `;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al cargar la página");
  }
});

module.exports = app;

/*
* ROUTES disponibles:
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

GET http://localhost:3000/api/users
GET http://localhost:3000/api/users/68c896bb54fa37a1d07cc640
POST http://localhost:3000/api/users
body:
{
  "firstName": "Juan",
  "lastName": "Perez",
  "age": 30,
  "dni": "12345888",
  "course": "Programación Full Stack",
  "grade": 9,
  "image": "https://example.com/avatar.jpg"
}

PUT http://localhost:3000/api/users/68c896bb54fa37a1d07cc640
body:
{
  "firstName": "Jimito",
  "lastName": "Rodriguez",
  "age": 31,
}
DELETE http://localhost:3000/api/users/68c896bb54fa37a1d07cc640

*/
