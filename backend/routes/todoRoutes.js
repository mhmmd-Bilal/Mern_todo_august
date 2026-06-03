import express from "express";

const routes = express.Router();

import {
  getTodos,
  createTodo,
  getTodoById,
  deleteTodo,
  udpateTodo,
} from "../controllers/todoController.js";
import { protect } from "../middlewares/authMiddleware.js";

// http://localhost:4000/api/todo
routes.get("/",protect, getTodos);

// http://localhost:4000/api/todo/create
routes.post("/create",protect, createTodo);

routes.get("/:id",protect, getTodoById);

// http://localhost:4000/api/todo/delete?id="2848943234c2bc&"
routes.delete("/delete",protect, deleteTodo);

routes.patch("/update",protect, udpateTodo);

export default routes;
