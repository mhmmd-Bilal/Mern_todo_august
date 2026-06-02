import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../axios";
import "./UpdateScreen.css";

function UpdateTodoScreen() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [isCompleted, setIsCompleted] = useState(false);

  const { id } = useParams();

  const getTodoById = async () => {
    try {
      let res = await AxiosApi.get(`/${id}`);
      let data = res.data;
      setTitle(data?.title);
      setDescription(data?.description);
      setIsCompleted(data?.isCompleted);
    } catch (error) {}
  };

  useEffect(() => {
    getTodoById();
  }, [id]);

  return (
    <div className="update-container">
      <div className="update-card">
        <div className="card-header">
          <h1>Edit Task</h1>
          <p>Update your task details and status</p>
        </div>

        <form className="update-form">
          <div className="form-group">
            <label>Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              value={isCompleted.toString()}
              onChange={(e) => setIsCompleted(e.target.value === "true")}
            >
              <option value="false">Pending</option>
              <option value="true">Completed</option>
            </select>
          </div>

          <div className="button-group">
            <button type="submit" className="save-btn">
              Save Changes
            </button>

            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodoScreen;
