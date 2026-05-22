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

const deleteTodo = async (req, res) => {
  let { id } = req.query;

  await Todos.findByIdAndDelete(id);

  res.json({ message: "Deleted" });
};

export { getTodos, createTodo, getTodoById , deleteTodo };
