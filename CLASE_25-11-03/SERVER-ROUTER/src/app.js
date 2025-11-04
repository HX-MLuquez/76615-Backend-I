const express = require("express");
const app = express();
const routes = require("./routes/index"); // index.js <- {{/users}{/products}}
// const routesProducts = require("./routes/product.router"); // index.js



app.use(express.json()); // {} por body es de lectura
app.use(express.urlencoded({ extended: true })); // form -> urlencoded

app.get("/", (req, res) => {
  res.json({ API: "BACKEND - ROUTER", break: "a las 21:15 volvemos" });
});


app.use("/api", routes)
// const productsRouter = require("./routes/product.router");
// const usersRouter = require("./routes/user.router");
// const cartRouter = require("./routes/cart.router");

// app.use("/api/products", productsRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/cart", cartRouter);

/*
http://localhost:8080/

http://localhost:8080/api/
                    http://localhost:8080/api/users
                                                  /
                                                  /gender
                    http://localhost:8080/api/products
                                                   /
                                                   /324234
                    http://localhost:8080/api/cart
*/

/*
Sin el index router

const productsRouter = require("./routes/product.router")
const usersRouter = require("./routes/product.router")
app.use("/api", productsRouter)
app.use("/api", usersRouter)
*/


module.exports = app;
