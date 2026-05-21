import Todos from "../model/todoModel.js";

const getTodos = async (req, res) => {
  let todos = await Todos.find();

  res.send(todos);
};

const createTodo = async (req, res) => {
  let { title, description } = req.body;

  let todo = await Todos.create({
    title,
    description,
  });

  res.send(todo);
};

const getTodoById = async (req, res) => {
  let { id } = req.params;

  let todo = await Todos.findById(id);

  res.send(todo);
};

export { getTodos, createTodo, getTodoById };