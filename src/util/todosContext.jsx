import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const TodosContext = createContext();

const users = [
  {
    id: 1,
    email: "ahmed@gmail.com",
    password: "12",
  },
  {
    id: 2,
    email: "hamda@gmail.com",
    password: "12",
  },
  {
    id: 3,
    email: "hani@gmail.com",
    password: "12",
  },
];

export default function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const todosData = localStorage.getItem("todos");
    return todosData ? JSON.parse(todosData) : [];
  });
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("userInfo");
    return userData ? JSON.parse(userData) : null;
  });
  const navigate = useNavigate();

  function logIn(email, password) {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      const userInfo = {
        uid: foundUser.id,
        email: foundUser.email,
        isLoggedIn: true,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setUser(userInfo);
      navigate("/todos");
    } else {
      alert("Invalid email or password");
    }
  }
  function logOut() {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/login");
  }

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
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        addTodos,
        todoDelete,
        logIn,
        logOut,
        user,
        setUser,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
export const UseTodos = () => {
  return useContext(TodosContext);
};
