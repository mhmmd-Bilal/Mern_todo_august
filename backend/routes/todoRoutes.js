import express from "express";

const routes = express.Router();

import {
  getTodos,
  createTodo,
  getTodoById,
  deleteTodo,
  udpateTodo,
} from "../controllers/todoController.js";

// http://localhost:4000/api/todo
routes.get("/", getTodos);

// http://localhost:4000/api/todo/create
routes.post("/create", createTodo);

routes.get("/:id", getTodoById);

// http://localhost:4000/api/todo/delete?id="2848943234c2bc&"
routes.delete("/delete", deleteTodo);

routes.patch("/update", udpateTodo);

export default routes;
