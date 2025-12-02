// config/database.js
const mongoose = require("mongoose");

class DatabaseConfig {
  constructor() {
    this.mongoUri = this.buildMongoUri();
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE) || 10,
      serverSelectionTimeoutMS: parseInt(process.env.DB_TIMEOUT) || 5000,
      socketTimeoutMS: parseInt(process.env.DB_SOCKET_TIMEOUT) || 45000,
      bufferMaxEntries: 0,
      retryWrites: true,
    };
  }

  buildMongoUri() {
    const {
      DB_HOST = "localhost",
      DB_PORT = "27017",
      DB_NAME,
      DB_USER,
      DB_PASSWORD,
      DB_AUTH_SOURCE = "admin",
      MONGODB_URI,
    } = process.env;

    // Si existe MONGODB_URI completa (útil para servicios como MongoDB Atlas)
    if (MONGODB_URI) {
      return MONGODB_URI;
    }

    // Validar que DB_NAME existe
    if (!DB_NAME) {
      throw new Error("DB_NAME es requerido en las variables de entorno");
    }

    // Construir URI según si hay autenticación o no
    if (DB_USER && DB_PASSWORD) {
      return `mongodb://${DB_USER}:${encodeURIComponent(
        DB_PASSWORD
      )}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_AUTH_SOURCE}`;
    }

    return `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  }

  async connect() {
    try {
      await mongoose.connect(this.mongoUri, this.options);
      console.log(`✅ Conectado a MongoDB: ${process.env.DB_NAME}`);

      // Event listeners para monitoreo
      this.setupEventListeners();
    } catch (error) {
      console.error("❌ Error conectando a MongoDB:", error.message);
      process.exit(1);
    }
  }

  setupEventListeners() {
    mongoose.connection.on("error", (err) => {
      console.error("❌ Error de conexión MongoDB:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Desconectado de MongoDB");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("🔄 Reconectado a MongoDB");
    });
  }

  async disconnect() {
    try {
      await mongoose.connection.close();
      console.log("👋 Desconectado de MongoDB");
    } catch (error) {
      console.error("❌ Error al desconectar:", error.message);
    }
  }
}
const configDatabase = new DatabaseConfig();
module.exports = configDatabase;

// import configDatabase -> configDatabase.connect()
