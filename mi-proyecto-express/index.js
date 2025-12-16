import express from "express";

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando");
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// GET - obtener productos
app.get("/productos", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta GET de mi entidad productos"
  });
});

// POST - crear un producto
app.post("/productos", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta POST de mi entidad productos"
  });
});

// PUT - actualizar un producto
app.put("/productos", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta PUT de mi entidad productos"
  });
});

// DELETE - eliminar un producto
app.delete("/productos", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta DELETE de mi entidad productos"
  });
});

