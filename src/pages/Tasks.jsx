import React, { useState } from "react";
import { useTaskStore } from "../store/tasksStore";

export default function Tasks() {
  return (
    <div>
      <h1>Tasks Managements</h1>

      <div className="grid md:grid-cols-3 gap-3">
        <AddTask />
        <ShowTasks />
      </div>
    </div>
  );
}

const ShowTasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  if (tasks.length == 0) return <h1>Don't have any tasks</h1>;
  return (
    <div className="border p-5 rounded-lg md:col-span-2">
      <h1>{tasks.length}</h1>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {tasks?.map((data) => (
          <li key={data.id} className="border p-3 rounded-lg">
            <p>{data.task}</p>
            <button
              onClick={() => deleteTask(data.id)}
              className="bg-red-600 p-3 mt-5 text-white rounded-md font-bold text-lg"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const AddTask = () => {
  const [task, setTask] = useState("");
  const AddTask = useTaskStore((state) => state.AddTask);
  const handleAddTask = () => {
    if (!task) return;
    const taskData = {
      id: Math.floor(Math.random() * 1000),
      isComplated: false,
      task,
    };
    AddTask(taskData);
    setTask("");
  };
  return (
    <div className="border flex gap-3 p-5 rounded-lg ">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-3 rounded-md flex-1"
        placeholder="Enter Your Task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-800 text-white font-bold text-lg p-3 rounded-md"
      >
        Add Task
      </button>
    </div>
  );
};
