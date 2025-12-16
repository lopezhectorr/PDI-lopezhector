import express from "express";
import productosRoutes from "./routes/productos.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use("/productos", productosRoutes);
app.use("/categorias", categoriasRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


