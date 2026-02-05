import { Link, Navigate, Route, Routes } from "react-router";
import Todos from "./pages/Todos";
import AddTodos from "./pages/Add-Todos";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login";
import Counter from "./pages/counter";
import { useAuthStore } from "./store/authStore";

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-12">
      <header>
        <Link to={"/counter"}>Counter</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/login"
          element={!user?.isLoggedIn ? <Login /> : <Navigate to="/todos" />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/todos" element={<Todos />} />
          <Route path="/add-todos" element={<AddTodos />} />
        </Route>
      </Routes>
    </div>
  );
}
