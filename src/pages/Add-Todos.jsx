import React, { useState } from "react";
import { UseTodos } from "../util/todosContext";
import { useNavigate } from "react-router";

export default function AddTodos() {
  const [status, setStatus] = useState("middle");

  const { addTodos, user } = UseTodos();

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const desc = formData.get("desc");
    if (!title || !desc) return alert("ooops fill all fields");
    const todo = {
      id: Math.random().toString(32).substring(2, 8),
      title,
      desc,
      status,
      isComplated: false,
      owner: {
        id: user.uid,
        email: user.email,
      },
    };
    addTodos(todo);
    navigate("/todos");

    e.target.reset();

    setStatus("middle");
  };
  return (
    <div className="max-w-2xl">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="title">Titel</label>
          <input
            className="w-full border  rounded-md p-3"
            id="title"
            name="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <textarea
            className="w-full resize h-52 border  rounded-md p-3"
            id="desc"
            name="desc"
            type="text"
          />
          <select
            className="border p-3 w-full rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {["easy", "middle", "hard"].map((s, i) => (
              <option value={s} key={i}>
                {s}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-800 text-white p-3 rounded-md my-3 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
