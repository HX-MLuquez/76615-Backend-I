
## API doc
### Lista de 5 Libros para Pruebas
```json
[
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1a",
    "title": "Cien años de soledad",
    "year": 1967,
    "author": "Gabriel García Márquez",
    "genre": "Realismo mágico",
    "description": "La saga de la familia Buendía en Macondo",
    "price": 24.99,
    "stock": 15,
    "img": "https://images.example.com/cien-anos-soledad.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1b",
    "title": "1984",
    "year": 1949,
    "author": "George Orwell",
    "genre": "Distopía",
    "description": "Una sociedad vigilada por el Gran Hermano",
    "price": 18.50,
    "stock": 20,
    "img": "https://images.example.com/1984.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1c",
    "title": "El Hobbit",
    "year": 1937,
    "author": "J.R.R. Tolkien",
    "genre": "Fantasía",
    "description": "El viaje de Bilbo Bolsón a la Montaña Solitaria",
    "price": 22.95,
    "stock": 12,
    "img": "https://images.example.com/hobbit.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1d",
    "title": "Orgullo y prejuicio",
    "year": 1813,
    "author": "Jane Austen",
    "genre": "Clásico",
    "description": "La historia de Elizabeth Bennet y Fitzwilliam Darcy",
    "price": 16.75,
    "stock": 18,
    "img": "https://images.example.com/orgullo-prejuicio.jpg"
  },
  {
    "id": "664f3c8a8d1d1a0f9c7a5b1e",
    "title": "La sombra del viento",
    "year": 2001,
    "author": "Carlos Ruiz Zafón",
    "genre": "Misterio",
    "description": "Un libro misterioso en el Cementerio de los Libros Olvidados",
    "price": 26.50,
    "stock": 10,
    "img": "https://images.example.com/sombra-viento.jpg"
  }
]
```

### Pasos para Probar Todas las Rutas de Libros

#### 1. Preparar el entorno
1. Iniciar el servidor: `npm start`
2. Instalar Thunder Client (extensión de VSCode) o usar Postman
3. Configurar `Content-Type: application/json` en los headers

---

#### 2. Probar GET /api/books (Listar libros)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books`
- **Respuesta Esperada**: Array vacío o con libros existentes
- **Código**: 200 OK

#### 2. b. Probar GET by ID /api/books/:id (Obtener libro por ID)
- **Método**: GET
- **URL**: `http://localhost:8080/api/books/664f3c8a8d1d1a0f9c7a5b1b` (usar id real)
- **Respuesta Esperada**: Objeto del libro correspondiente
- **Código**: 200 OK

---

#### 3. Probar POST /api/books (Crear libro)
- **Método**: POST
- **URL**: `http://localhost:8080/api/books`
- **Body** (usar un libro de la lista sin `id`):
```json
{
  "title": "La Biblioteca de Babel",
  "author": "Jorge Luis Borges",
  "year": 1941,
  "genre": "Fantasía",
  "description": "Un relato sobre un universo en forma de biblioteca",
  "price": 15.99,
  "stock": 12,
  "img": "https://images.example.com/biblioteca-babel.jpg"
}
```