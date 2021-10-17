const express = require("express");
const cors = require("cors");
const path = require("path");
const { dbConnection } = require("./database/config");
require("dotenv").config();

// Crear el servidor/aplicacipon de express
const app = express();

// Conexión a base de datos
dbConnection();

// Directorio Público
app.use(express.static("./public"));

// CORS
app.use(cors());

// Lectura y parseo(transformar) del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth.routes"));

// Manejar rutas
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Excucha de peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
