const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: "1",
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    genero: "M",
    deleted: false,
  },
  {
    id: "2",
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    genero: "F",
    deleted: false,
  },
  {
    id: "3",
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 35,
    genero: "M",
    deleted: false,
  },
];

//* MIDDLEWARES
app.use(express.json()); //* BODY -> JSON
app.use(express.urlencoded({ extended: true })); //* FORM -> URLENCODED -> JSON

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//* GET users - LEER
// http://localhost:8080/api/users
app.get("/api/users", (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//* POST user - CREAR
app.post("/api/users", (req, res) => {
  const { nombre, apellido, edad, genero } = req.body;
  if (!nombre || !apellido || !edad || !genero) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }
  const newUser = {
    id: uuidv4(),
    nombre,
    apellido,
    edad,
    genero,
  };
  users.push(newUser);
  res.status(201).json({ success: true, user: newUser });
});

/*
user para testear POSTMAN
{
    "nombre": "Ana",
    "apellido": "Martinez",
    "edad": 28,
    "genero": "F"
}
*/

//* PUT user - ACTUALIZAR
app.put("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { nombre, apellido, edad, genero } = req.body;
  if (!userId || userId === null) {
    return res.status(400).json({ error: "Falta el ID del usuario" });
  }

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = {
      id: userId,
      nombre,
      apellido,
      edad,
      genero,
    };
    res.status(200).json({ success: true, user: users[userIndex] });
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

//* DELETE (soft) user - PUT actualiza deleted a true
app.delete("/api/users/deleted/:userId", (req, res) => {
  const { userId } = req.params;
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex].deleted = true;
    res.status(200).json({ success: true, user: users[userIndex] });
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

//* DELETE (hard) user
app.delete("/api/users/delete-hard/:userId", (req, res) => {
  const { userId } = req.params;
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(200).json({ success: true });
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

module.exports = app;
