import { Router } from "express";
import prisma from "../lib/prisma.js";

const router = Router();

/* GET /tareas → traer todas */
router.get("/", async (req, res) => {
  const tareas = await prisma.tarea.findMany();
  res.json(tareas);
});

/* GET /tareas/:id → traer una */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tarea = await prisma.tarea.findUnique({
    where: { id },
  });
  res.json(tarea);
});

/* POST /tareas → crear */
router.post("/", async (req, res) => {
  const { titulo, descripcion, path } = req.body;
  const tarea = await prisma.tarea.create({
    data: { titulo, descripcion, path },
  });
  res.json(tarea);
});

/* PUT /tareas/:id → modificar */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, path } = req.body;

  const tarea = await prisma.tarea.update({
    where: { id },
    data: { titulo, descripcion, path },
  });

  res.json(tarea);
});

/* DELETE /tareas/:id → borrar */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await prisma.tarea.delete({
    where: { id },
  });

  res.json({ mensaje: "Tarea eliminada" });
});

export default router;
