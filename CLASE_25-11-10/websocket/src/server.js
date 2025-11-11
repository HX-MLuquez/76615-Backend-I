const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

//* Importar socket.io
//! ---> *** VER *** <---
const { Server } = require("socket.io");

//* SETEO handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//* Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//* Middleware
app.use(express.json());

//* Rutas
app.get("/", (req, res) => {
  res.render("index");
});

//*-------------------------------
// app -> {a,b,c,d} -> server {a,b,c,d,w,y,c}
const http = require("http");
const server = http.createServer(app);

//* Levantar el servidor
// const server = app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });

//* Lista de mensajes que se guardan en el servidor (simulando una base de datos)
const messages = [];

//* const messages = [{userConect}{message1}, {message2}, {message3}];

//TODO___ SERVER ____
//* Configuracion de socket.io.

//! ||======================================================||
//  ||======================================================||
//* ||  ||===========   ÁREA DE CÓDIGO   ===============||  ||
//* ||  ||        💻  Escribe tu código aquí  💻       ||  ||
//* ||  ||==================================================||
//! ||======================================================||
const io = new Server(server);

//* Evento de conexión - Cada que se conecta un client se ejecuta su function CB
//! ||======================================================||
//  ||======================================================||
//* ||  ||===========   ÁREA DE CÓDIGO   ===============||  ||
//* ||  ||        💻  Escribe tu código aquí  💻       ||  ||
//* ||  ||==================================================||
//! ||======================================================||

io.on("connection", (socket) => {
  console.log(`Usuario ID: ${socket.id} Conectado!!!`);

  // Nuestros EVENTOS de ESCUCHA
  socket.on("userConnect", (data) => {
    console.log("----> ", data); // {user:pepe, id: 12345}
    let message = {
      id: socket.id,
      info: "connection",
      name: data.user,
      message: `usuario: ${data.user} - id: ${data.id} - Conectado`,
    };
    messages.push(message);
    io.emit("serverUserMessage", messages);
  });

   socket.on("userMessage", (data) => {
    console.log("::::data:::::", data);
    const message = {
      id: socket.id,
      info: "message",
      name: data.user,
      message: data.message,
    };
    messages.push(message);
    io.emit("serverUserMessage", messages);
  });

  // NUESTRO EVENTO DE EMITIR

  socket.on("disconnect", (data) => {
    console.log("----> ", data); // transport close
    console.log("Cliente desconectado:", socket.id);
  });
});
//* Evento de desconexion

module.exports = server;
