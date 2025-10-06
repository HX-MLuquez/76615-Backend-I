const { faker } = require("@faker-js/faker");
const User = require("../models/user.model");

const createUsers = async () => {
  try {
    // Limpiar colección existente (opcional)
    await User.deleteMany({});
    console.log("Colección limpiada");

    const users = [];

    // Cursos disponibles
    const courses = [
      "Programación Full Stack",
      "Data Science",
      "UX/UI Design",
      "Marketing Digital",
      "Desarrollo Mobile",
      "Ciberseguridad",
      "Inteligencia Artificial",
      "DevOps",
    ];

    for (let i = 0; i < 20; i++) {
      const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 65 }),
        dni: faker.string.numeric(8), // DNI de 8 dígitos
        course: faker.helpers.arrayElement(courses),
        grade: faker.number.int({ min: 1, max: 10 }),
        image: faker.image.avatar(), // URL de avatar aleatorio
      };

      users.push(user);
    }

    // Insertar usuarios en la base de datos
    const createdUsers = await User.insertMany(users);

    console.log(`${createdUsers.length} usuarios creados exitosamente`);
    console.log("\n--- Usuarios creados ---");

    createdUsers.forEach((user, index) => {
      console.log(
        `${index + 1}. ${user.firstName} ${user.lastName} - ${
          user.course
        } - Nota: ${user.grade}`
      );
    });

    return createdUsers;
  } catch (error) {
    console.error("Error creando usuarios:", error.message);

    // Si hay error de DNI duplicado, mostrar mensaje específico
    if (error.code === 11000) {
      console.log(
        "Error: DNI duplicado detectado. Ejecuta la función nuevamente."
      );
    }

    throw error;
  }
};

// Función alternativa que evita duplicados de DNI
const createUsersWithUniqueDNI = async () => {
  try {
    await User.deleteMany({});
    console.log("Colección limpiada");

    const users = [];
    const usedDNIs = new Set();
    const courses = [
      "Programación Full Stack",
      "Data Science",
      "UX/UI Design",
      "Marketing Digital",
      "Desarrollo Mobile",
      "Ciberseguridad",
      "Inteligencia Artificial",
      "DevOps",
    ];

    for (let i = 0; i < 20; i++) {
      let dni;

      // Generar DNI único
      do {
        dni = faker.string.numeric(8);
      } while (usedDNIs.has(dni));

      usedDNIs.add(dni);

      const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 65 }),
        dni: dni,
        course: faker.helpers.arrayElement(courses),
        grade: faker.number.int({ min: 1, max: 10 }),
        image: faker.image.avatar(),
      };

      users.push(user);
    }

    const createdUsers = await User.insertMany(users);

    console.log(
      `${createdUsers.length} usuarios creados exitosamente (DNIs únicos)`
    );
    console.log("\n--- Usuarios creados ---");

    createdUsers.forEach((user, index) => {
      console.log(
        `${index + 1}. ${user.firstName} ${user.lastName} - DNI: ${
          user.dni
        } - ${user.course}`
      );
    });

    return createdUsers;
  } catch (error) {
    console.error("Error creando usuarios:", error.message);
    throw error;
  }
};

// Exportar las funciones
module.exports = {
  createUsers,
  createUsersWithUniqueDNI,
};

// Si ejecutas este archivo directamente
if (require.main === module) {
  // Conectar a MongoDB
  const mongoose = require("mongoose");

  // Cargar variables de entorno
  require("dotenv").config();

  mongoose
    .connect(
      "completar directo con la URI aquí, ya que al no levantar el server no toma las variables de entorno"
    )
    .then(() => {
      console.log("📦 Conectado a MongoDB");
      return createUsersWithUniqueDNI(); // Usar la función con DNIs únicos
    })
    .then(() => {
      console.log("Proceso completado");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error:", error);
      process.exit(1);
    });
}

//* node src/utils/mock.js
