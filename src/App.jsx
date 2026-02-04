import { Link, Route, Routes } from "react-router";
import Todos from "./pages/Todos";
import AddTodos from "./pages/Add-Todos";

export default function App() {
  return (
    <div className="p-12">
      <header className="flex gap-3 border-b cursor-pointer mb-8">
        <Link to="/">Todos</Link>
        <Link to="/add-todos">Add Todos</Link>
      </header>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/add-todos" element={<AddTodos />} />
      </Routes>
    </div>
  );
}
