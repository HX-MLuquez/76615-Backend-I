const express = require("express");
const router = express.Router();

const products = [
  {
    id: "1",
    nombre: "Camiseta deportiva",
    precio: 15000,
    stock: 10,
  },
  {
    id: "2",
    nombre: "Zapatillas running",
    precio: 65000,
    stock: 5,
  },
  {
    id: "3",
    nombre: "Gorra",
    precio: 8000,
    stock: 20,
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ staus: false, message: "id undefined" });
    }
    const product = products.find((p) => p.id === id);
    if (!product) {
      return res
        .status(404)
        .json({ staus: false, message: "product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error: ", error);
  }
});

module.exports = router;
