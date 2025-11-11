//* CLIENT - CLIENTE
console.log("IN CLIENT");

const userName = document.querySelector(".userName");
const chatMessage = document.querySelector(".chatMessage");
var uuid = "";

//! ||======================================================||
//  ||======================================================||
//* ||  ||===========   ÁREA DE CÓDIGO   ===============||  ||
//* ||  ||        💻  Escribe tu código aquí  💻       ||  ||
//* ||  ||==================================================||
//! ||======================================================||

//* Conexión con el servidor de Socket.IO
// const socket = io("http://mi-server-aparte.com")
const socket = io(); // -> por defecto se conecta al server donde se aloja http://localhost:8080
// www.api-pepe.com

//* Función para actualizar los mensajes en el chat
const updateMessagges = (newMessages) => {
  messages = [...newMessages];
  chatMessage.innerHTML = messages
    .map((message) => {
      if (message.info === "connection") {
        return `<p class="connection">${message.message}</p>`;
      } else {
        return `
        <div class="messageUser">
          <h5>Nombre: ${message.name}</h5>
          <p>ID - ${message.id}</p>
          <p>${message.message}</p>
        </div>
      `;
      }
    })
    .join("");
};

//* EVENTOS DE EMITIR

//* Formulario de entrada de usuario con SweetAlert2
// Mostrar el formulario de entrada de usuario
Swal.fire({
  title: "Ingrese su información",
  html: `
        <input type="text" id="swal-input-name" class="swal2-input" placeholder="Nombre">
        <input type="text" id="swal-input-id" class="swal2-input" placeholder="ID">
      `,
  focusConfirm: false,
  showCancelButton: true,
  confirmButtonText: "Ingresar",
  preConfirm: () => {
    const name = Swal.getPopup().querySelector("#swal-input-name").value;
    const id = Swal.getPopup().querySelector("#swal-input-id").value;
    if (!name || !id) {
      Swal.showValidationMessage(`Por favor ingrese ambos campos`);
    }
    return { name: name, id: id };
  },
}).then((result) => {
  console.log("-->", result);
  const { name, id } = result.value;
  uuid = id;
  if (result.isConfirmed) {
    userName.textContent = name;
    socket.emit(`userConnect`, { user: name, id });
  }
});

//* EVENTOS DE ESCUCHA
//* Evento de conexión con el servidor
socket.on("serverUserMessage", (data) => {
  chatMessage.innerHTML = "";
  updateMessagges(data);
});

//* Función para actualizar los mensajes en el chat

//* Formulario de entrada de usuario con SweetAlert2
// Mostrar el formulario de entrada de usuario

//* Evento de conexión con el servidor

//* Enlace de eventos de los botones de la interfaz - al DOM
const btnMessage = document.getElementById("btnMessage");
const inputMessage = document.getElementById("inputMessage");
//* Función para enviar un mensaje al servidor
btnMessage.addEventListener("click", (e) => {
  e.preventDefault();
  const message = inputMessage.value;
  socket.emit("userMessage", { message, user: userName.innerHTML });
});

//* Evento de conexión con el servidor

/*
Los eventos de Socket.IO son asíncronos, lo que significa que no podemos detener el flujo 
de la aplicación esperando una respuesta directa. 
Para manejar esto, podemos:

1. Usar callbacks proporcionados por el cliente o el servidor.
2. Emitir eventos personalizados y escuchar las respuestas por separado.

Esto permite que el flujo de la aplicación continúe mientras se gestionan las respuestas.
*/
