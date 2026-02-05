import React, { useState } from "react";
import { UseTodos } from "../util/todosContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = UseTodos();

  const handleLogin = () => {
    logIn(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border p-4 rounded-md">
        <h1 className="my-3 font-bold">Login </h1>
        <input
          className="w-full p-3 border rounded-md"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="w-full p-3 border my-3 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="p-3 bg-blue-800 rounded-md text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
