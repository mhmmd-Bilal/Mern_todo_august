import express from "express";

const routes = express.Router();

import { getTodos, createTodo, getTodoById } from "../controllers/todoController.js";

// http://localhost:4000/api/todo
routes.get("/", getTodos);

// http://localhost:4000/api/todo/create
routes.post("/create", createTodo);

routes.get("/:id" , getTodoById)

export default routes;
