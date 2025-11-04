const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "This is the cart route" });
});

router.post("/", (req, res) => {
  const newItem = req.body;
  res.status(201).json({ message: "Item added to cart", item: newItem });
});

module.exports = router;