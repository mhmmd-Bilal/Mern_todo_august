import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../axios";

function HomeScreen() {
  // let [stateName,setState] = useState(initial value)

  let [todos, setTodos] = useState([]);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const navigate = useNavigate();

  const getTodos = async () => {
    try {
      let res = await AxiosApi.get("/");
      setTodos(res.data);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await AxiosApi.post("/create", { title, description });
      getTodos();
      setTitle("");
      setDescription("");
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    try {
      await AxiosApi.delete("/delete", { params: { id } });
      getTodos();
    } catch (error) {}
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <button type="submit">submit</button>
        </form>
      </div>

      {todos?.map((todo, index) => (
        <div key={index}>
          <h1> {todo.title} </h1>
          <p>{todo.description}</p>
          <button onClick={() => navigate(`/edit/${todo._id}`)}>edit</button>
          <button onClick={() => handleDelete(todo._id)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default HomeScreen;
