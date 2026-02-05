import { useState } from "react";

import { useAuthStore } from "../store/authStore";
import { useTodoStore } from "../store/todoStore";

export default function Todos() {
  const user = useAuthStore((state) => state.user);
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const [tab, setTab] = useState("All");
  const todosFiltered = todos.filter((t) => {
    const isOwner = t.owner.id === user?.uid;

    if (!isOwner) return false;

    if (tab === "All") return true;

    return t.status === tab.toLowerCase();
  });

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h1>Todos {todos.length}</h1>

      <div className=" flex gap-3 my-3">
        {["All", "Easy", "Middle", "Hard"].map((s, i) => (
          <button
            onClick={() => setTab(s)}
            className={`
          ${i == 0 ? "bg-blue-950" : i == 1 ? "bg-green-950" : i == 2 ? "bg-red-900 py-3" : i == 3 ? "bg-red-600" : ""}
          py-3 px-6 rounded-md text-white flex-1`}
            key={i}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3  ">
        {todosFiltered?.length ? (
          todosFiltered?.map((todo) => (
            <div className="border rounded-2xl  p-4 relative" key={todo.id}>
              <span
                className={`bg-yellow-300  absolute right-1 px-3 py-1 rounded-2xl top-1`}
              >
                {todo.status}
              </span>
              <p>{todo.title}</p>
              <p>{todo.desc}</p>

              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 p-2 rounded-md text-white"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h3 className="flex-1  text-2xl font-bold italic ">
            You don’t have any tasks in the "{tab}" tab yet.
          </h3>
        )}
      </div>
    </div>
  );
}
