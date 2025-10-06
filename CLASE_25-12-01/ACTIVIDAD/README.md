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
