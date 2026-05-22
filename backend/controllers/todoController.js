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

const udpateTodo = async (req, res) => {
  const { title, description, isCompleted, id } = req.body;

  const todo = await Todos.findByIdAndUpdate(id, {
    title,
    description,
    isCompleted,
  });

  res.json(todo);
};

export { getTodos, createTodo, getTodoById, deleteTodo, udpateTodo };
