import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../axios";

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
    <div>
      <form>
        <input
          type="text"
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
  );
}

export default UpdateTodoScreen;
