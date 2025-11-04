const express = require("express");
const router = express.Router();

const productsRouter = require("./product.router");
/*
router.get("/", (req, res) => {
  ...
});

router.get("/:id", (req, res) => {
  ...
  }
});
*/
const usersRouter = require("./user.router");
const cartRouter = require("./cart.router");

router.use("/products", productsRouter); //  /api/products/  y /api/products/:id
router.use("/users", usersRouter);
router.use("/cart", cartRouter);

module.exports = router;