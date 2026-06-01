import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../axios";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
} from "../slices/todoApiSlice";

function HomeScreen() {
  // let [stateName,setState] = useState(initial value)

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const { data: todos, refetch } = useGetTodosQuery();

  const [createTodo] = useCreateTodoMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await createTodo({ title, description }).unwrap()
      refetch();
      setTitle("");
      setDescription("");
    } catch (error) {
      
    }
  };

  const handleDelete = async (id) => {
    try {
      await AxiosApi.delete("/delete", { params: { id } });
      refetch();
    } catch (error) {}
  };

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
