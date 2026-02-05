import React from "react";
import { useCounterStore } from "../store/useConterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const Increment = useCounterStore((state) => state.Increment);
  const Decrement = useCounterStore((state) => state.Decrement);
  return (
    <div className="max-w-2xl border p-8 rounded-2xl  flex justify-center items-center w-full  m-auto">
      <div className=" ">
        <button
          onClick={() => Increment()}
          className="bg-teal-700 rounded-md text-white p-3 text-lg font-bold"
        >
          Increment
        </button>
        <h1 className="text-6xl my-4 text-center font-extrabold">{count}</h1>
        <button
          onClick={() => Decrement()}
          className="bg-red-700 rounded-md text-white p-3 text-lg font-bold"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
