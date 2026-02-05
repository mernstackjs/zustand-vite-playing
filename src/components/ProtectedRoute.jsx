import React from "react";
import { Link, Navigate, Outlet } from "react-router";
import { UseTodos } from "../util/todosContext";

export default function ProtectedRoute() {
  const { logOut, user } = UseTodos();

  if (!user?.isLoggedIn) return <Navigate to="/login" />;
  return (
    <div>
      <header className="flex justify-between items-center border-b cursor-pointer mb-8">
        <nav className="flex gap-3">
          <Link to="/todos">Todos</Link>
          <Link to="/add-todos">Add Todos</Link>
        </nav>

        <h1>
          Welcome : {user?.email} Your Id is {user?.uid}
        </h1>

        <button
          className="bg-red-600 text-white p-3 rounded-md"
          onClick={() => logOut()}
        >
          Logout
        </button>
      </header>
      <Outlet />
    </div>
  );
}
