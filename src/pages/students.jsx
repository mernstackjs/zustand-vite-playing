import React, { useState } from "react";
import AddStudent from "../components/AddStudent";
import StudentsList from "../components/StudentsList";

export default function Students() {
  const [students, setStudents] = useState(() => {
    const studentsData = localStorage.getItem("students_data");
    return JSON.parse(studentsData) || [];
  });

  const deleteStudent = (rolNum) => {
    setStudents((prev) => prev.filter((s) => s.rolNum !== rolNum));
  };
  return (
    <div className="p-5">
      <h1>Students Managements</h1>

      <div className="grid gap-3 grid-cols-3">
        <AddStudent students={students} setStudents={setStudents} />
        <StudentsList students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
}
