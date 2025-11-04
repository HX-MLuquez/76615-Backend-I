const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const { paths } = require("./config/config");

// console.log("File path:", paths.public);

//* SETEO handlebars - método .engine para configurar el motor de plantillas
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main", // es como el index.html o el home.html
    // layoutsDir: path.join(__dirname, "views/layouts"),
    // partialsDir: path.join(__dirname, "views/partials"),
    // pagesDir: path.join(__dirname, "views/pages"),
  })
);
app.set("view engine", "hbs");
app.set("views", paths.views);

//* Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

//* Static
//* Todos nuestros archivos ESTATICOS (html, css, img, etc)
// que se encuentran en la carpeta 'public' sen van a servir en /static
app.use("/public", express.static(paths.public));

app.get("/", (req, res) => {
  // return res.json({ APP: "HANDLEBARS" });

  //* Para renderizar una vista con handlebars usamos res.render 
  //* indicamos la ruta de la vista a renderizar y le pasamos como 
  //* segundo argumento un objeto con los datos
  return res.render("pages/home", {edad: 30, active: false});
  /*
  home.hbs::::::
  <div>
    {{> header}}
    <h1>SOY el INICIO - el HOME</h1>

    {{#if active}}
      <p>La edad es: {{edad}}</p>
    {{/if}}
  
    {{> footer}}
</div>
  */
});

//* RENDERIZA todo esto:::::::
/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mi primera aplicación con Handlebars">
    <meta name="keywords" content="HTML, CSS, JavaScript, Handlebars">

    <title>Mi Aplicación</title>
   
    <link rel="stylesheet" href="/static/css/styles.css">
   
</head>
<body>
    <div>
    <div class="header">
    <h1>Welcome to Handlebars</h1>
    <div class="container">
    <p>Ejemplo de integración de rutas con Handlebars</p>
    <div class="content">
        <a href="/user">User not_found</a>
        <a href="/user?id=1234&nombre=Pepe">User</a>
        <a href="/products">Products</a>
        <a href="/create_user">Create User</a>
        <a href="/astucia/No contaban con mi astucia !!!">Astucia</a>
    </div>
</div>
</div>
    <h1>SOY el INICIO - el HOME</h1>
    <div class="footer">
    <p>Copyright &copy; 2025</p>
    <p>Powered by Handlebars</p>
    <p>Author Mauricio Ga. Lúquez</p>
    <p>
        <a href="https://www.npmjs.com/settings/mauricio776101/packages">npm</a>
        <a href="https://github.com/HX-MLuquez">GitHub</a>
    </p>
    <p>Version 1.0.0</p>
</div>  
</div>
</body>
</html>
*/

app.get("/user", (req, res) => {
  const { nombre } = req.query;
  // const context = {
  //   nombre,
  //   id,
  // };
  return res.render("pages/user", {nombre});
  // let isValidate = id === "1234";
  // if (isValidate) return res.render("pages/user", context);
  // else return res.render("pages/not_found_user", context);
});

app.get("/admin", (req, res) => {
  const { name } = req.query;
  const user = {
    name,
  };

  return res.render("pages/admin", { user });
});

const users = [];
//* Form para crear un usuario
app.get("/create_user", (req, res) => {
  return res.render("pages/create_user", {});
});

// app.post("/user", (req, res) => {
//   try {
//     const { nombre, email } = req.body;
//     if (!nombre || !email) {
//       return res.status(400).send("Faltan datos para crear el usuario");
//     }
//     // Generar un Id random
//     // const id = Math.floor(Math.random() * 10000);

//     const user = {
//       nombre,
//       email,
//       id,
//     };
//     users.push(user);

//     return res.render("pages/user", user);
//   } catch (error) {
//     console.error("Error al crear el usuario:", error);
//     // res.status(500).send("Error interno del servidor");
//     res.render("pages/not_found_user", {})
//   }
// });

app.get("/admin/:code", (req, res) => {
  const { code } = req.params;
  const context = {
    code,
  };
  return res.render("pages/admin", context);
});
const products = [
  { id: 1, title: "Producto 1", price: 100, stock: 32 },
  { id: 2, title: "Producto 2", price: 200 },
  { id: 3, title: "Producto 3", price: 300 },
];
app.get("/products", (req, res) => {
  const context = {
    products,
  };
  return res.render("pages/products", context);
});

app.get("/astucia/:message", (req, res) => {
  const { message } = req.params;
  console.log(message);
  const context = {
    message,
  };
  return res.render("pages/astucia", context);
});

module.exports = app;
