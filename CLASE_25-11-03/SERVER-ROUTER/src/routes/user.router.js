const express = require("express");
const router = express.Router();

const users = [
  {
    id: "1",
    nombre: "Juan",
    email: "juan@example.com",
    edad: 25,
  },
  {
    id: "2",
    nombre: "Maria",
    email: "maria@example.com",
    edad: 30,
  },
  {
    id: "3",
    nombre: "Pedro",
    email: "pedro@example.com",
    edad: 28,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ staus: false, message: "id undefined" });
    }
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ status: false, message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error: ", error);
  }
});

module.exports = router;
