//* module HTTP es nativo de NODE y no necesitamos instalar

// import http from "http"

const http = require("http");
// http -> { }

const PORT = 3003;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola mundo desde mi servidor HTTP!\n");
});

server.listen(PORT, () => {
  console.log(
    `Servidor HTTP está escuchando en el puerto http://localhost:${PORT}`
  );
});

module.exports ={
  server
}


/*

Vamos a un descanso - VOLVEMOS a las 11:11  !!!!!!!!!!
*/