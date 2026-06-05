import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../axios";
import {
  useGetTodosQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
} from "../slices/todoApiSlice";
import "./HomeScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutUserMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

function HomeScreen() {
  // let [stateName,setState] = useState(initial value)

  const { userData } = useSelector((state) => state.auth);

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  const { data: todos, refetch } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();

  const [createTodo] = useCreateTodoMutation();
  const [logoutUser] = useLogoutUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await createTodo({
        title,
        description,
        userId: userData._id,
      }).unwrap();
      refetch();
      setTitle("");
      setDescription("");
      toast.success("Todo Created");
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo({ id }).unwrap();
      refetch();
    } catch (error) {}
  };

  const handlelogout = async () => {
    try {
      await logoutUser().unwrap();
      await dispatch(logout());
      navigate("/login");
    } catch (error) {}
  };

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData]);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Tasks</h1>
          <p>Create and manage your todos</p>
        </div>
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="primary-btn" type="submit">
            Create Task
          </button>
        </form>
        <button
          className="primary-btn"
          style={{ marginTop: "10px" }}
          onClick={handlelogout}
        >
          logout
        </button>{" "}
      </aside>

      <main className="content">
        <div className="content-header">
          <h2>All Tasks</h2>
          <span>{todos?.length || 0} Tasks</span>
        </div>

        <div className="todo-list">
          {todos?.map((todo) => (
            <div className="todo-item" key={todo._id}>
              <div className="todo-info">
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>

              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit/${todo._id}`)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomeScreen;
