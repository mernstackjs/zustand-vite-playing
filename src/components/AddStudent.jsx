import React from "react";

export default function AddStudent({ setStudents }) {
  const handleAddNewStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const student_name = formData.get("studnet_name");
    const student_class = formData.get("studnet_class");
    const student = {
      rolNum: Math.floor(Math.random() * 1000),
      student_name,
      student_class,
    };
    setStudents((prev) => [...prev, student]);

    e.target.reset();
  };
  return (
    <div className="border p-3 rounded-2xl">
      <form onSubmit={handleAddNewStudent}>
        <h1>Add New Students</h1>
        <input
          className="w-full p-3 border rounded-md"
          name="studnet_name"
          placeholder="Enter Student Name"
        />
        <input
          className="w-full my-3 p-3 border rounded-md"
          name="studnet_class"
          placeholder="Enter Student Class"
        />
        <button className="bg-blue-800 text-white rounded-md px-7 py-3 cursor-pointer">
          Add{" "}
        </button>
      </form>
    </div>
  );
}
