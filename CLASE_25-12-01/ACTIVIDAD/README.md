# Server con Node js, MongoDB Atlas y Mongoose

## Descripción

Este proyecto es un servidor básico construido con Node.js, que se conecta a una base de datos MongoDB Atlas utilizando Mongoose como ODM (Object Data Modeling). El objetivo es proporcionar una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una colección de documentos en MongoDB.

## Trabajamos en:

1. Config de mongoose y conexión a MongoDB Atlas en el archivo `app.js`.
2. Creamos el esquema y modelo de Mongoose en `models/user.js`.
3. Implementamos las operaciones CRUD en el DAO `data-access-object/userDao.js`.

- createUser
- getAllUsers
- getUserById

# Mongoose

Es una ODM (Object Data Modeling (Modelado de Objetos)) para MongoDB y Node.js. Proporciona una solución basada en esquemas para modelar los datos de la aplicación, facilitando la validación, construcción de consultas y gestión de relaciones entre datos.

Nos ayuda a modelar los datos de la base de datos no sql cual si fuesen objetos en nuestro código, facilitando la interacción con la base de datos.


---


1. app server: configuraciones + middlewares + rutas
2. routes index: rutas 
3. route userRoutes: rutas de usuarios -> Controller UserController
4. controller userController: lógica de negocio -> Service userService
5. service userService: lógica de negocio -> DAO userDao
6. dao userDao: interacción con la base de datos -> Model User
7. model userModel: esquema y modelo de datos -> MongoDB Atlas (base de datos no sql) Collection users