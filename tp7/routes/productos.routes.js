import { Router } from "express";

const router = Router();

// GET todos
router.get("/", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta GET de mi entidad productos"
  });
});

// GET por ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    mensaje: `Esta es la ruta GET de mi entidad productos con el ID ${id}`
  });
});

// POST
router.post("/", (req, res) => {
  res.json({
    mensaje: "Esta es la ruta POST de mi entidad productos"
  });
});

// PUT con ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    mensaje: `Esta es la ruta PUT de mi entidad productos con el ID ${id}`
  });
});

// DELETE con ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    mensaje: `Esta es la ruta DELETE de mi entidad productos con el ID ${id}`
  });
});

export default router;
