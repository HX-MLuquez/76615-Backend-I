const express = require("express");
const app = express();

const listProducts = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const listUsers = [
  { id: 1, name: "User 1", email: "user1@example.com" },
  { id: 2, name: "User 2", email: "user2@example.com" },
];

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      title: "My API E-COMMERCE",
      message: "Welcome to my API",
      description: "This is a simple API built with Express.js",
      version: "1.0.0",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", (req, res) => {
  try {
    res.status(200).json({
      products: listProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users", (req, res) => {
  try {
    res.status(200).json({
      users: listUsers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Renderizar una vista de tipo formulario simple de login
app.get("/login", (req, res) => {
  try {
    const styles = `
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
        }

        form {
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        max-width: 300px;   
        margin: auto;
        }
        input[type="text"], input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 3px;
        }
        input[type="submit"] {
        background: #28a745;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 3px;
        cursor: pointer;
        }
        `;
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login</title>
            <style>${styles}</style>
        </head>
        <body>
            <form action="/login" method="POST">
                <h2>Login</h2>
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Login" />
            </form>
        </body>
      </html>
      `;
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;

/*
app{
get: f,
listen: f,
use: f,
...

}

*/
