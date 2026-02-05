import { create } from "zustand";

export const useTodoStore = create((set, get) => ({
  todos: JSON.parse(localStorage.getItem("todos")) || [],

  addTodo: (data) => {
    const newTodos = [...get().todos, data];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },

  deleteTodo: (id) => {
    const newTodos = get().todos.filter((t) => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },

  toggleTodo: (id) => {
    const newTodos = get().todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );

    localStorage.setItem("todos", JSON.stringify(newTodos));
    set({ todos: newTodos });
  },
}));
