
# Enlace a un chat modularizado

https://github.com/HX-MLuquez/chat-socket-io


# Chat con Socket.io

Paso a paso

1. npm i socket.io
2. Lo inyectamos en el client 
    <script src="/socket.io/socket.io.js"></script>
3. Configurar el server
```javascript
const io = require('socket.io')(httpServer);
io.on('connection', (socket) => {
  console.log('a user connected');
});
```

# Deploy en Render
Desplegar es subir la aplicacion a un servidor para que pueda ser accedida desde cualquier lugar. Render es una plataforma de alojamiento en la nube que permite desplegar aplicaciones web de manera sencilla. Es llevar nuestro proyecto a producción a un entorno en línea para que otros puedan acceder a él a través de Internet.