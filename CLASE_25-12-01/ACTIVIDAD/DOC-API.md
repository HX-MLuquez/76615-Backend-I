# Documentación API RESTful - Usuarios

```js
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);
```

### Ejemplos de uso

**GET**

```
http://localhost:3000/api/users
```

**GET by ID**

```
http://localhost:3000/api/users/68c896bb54fa37a1d07cc640
```

**POST**

```
http://localhost:3000/api/users
```

Body:

```json
{
  "firstName": "Juan",
  "lastName": "Perez",
  "age": 30,
  "dni": "12345888",
  "course": "Programación Full Stack",
  "grade": 9,
  "image": "https://example.com/avatar.jpg"
}
```

**PUT**

```
http://localhost:3000/api/users/68c896bb54fa37a1d07cc640
```

Body:

```json
{
  "firstName": "Jimito",
  "lastName": "Rodriguez",
  "age": 31
}
```

**DELETE**

```
http://localhost:3000/api/users/68c896bb54fa37a1d07cc640
```