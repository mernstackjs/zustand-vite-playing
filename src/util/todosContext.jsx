import { createContext, useContext, useEffect, useState } from "react";

const TodosContext = createContext();

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const todosData = localStorage.getItem("todos");
    return todosData ? JSON.parse(todosData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodos(data) {
    setTodos((prev) => [...prev, data]);
  }
  function todoDelete(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }
  return (
    <TodosContext.Provider value={{ todos, setTodos, addTodos, todoDelete }}>
      {children}
    </TodosContext.Provider>
  );
}
export const UseTodos = () => {
  return useContext(TodosContext);
};
