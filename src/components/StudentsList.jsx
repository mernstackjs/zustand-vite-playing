import React from "react";

export default function StudentsList({ students, deleteStudent }) {
  console.log(students);
  return (
    <div className="col-span-2 border rounded-2xl p-3">
      <ul className="grid md:grid-cols-3 gap-2">
        {students?.length !== 0 ? (
          students?.map((student) => (
            <li className="border rounded-lg p-3" key={student.rolNum}>
              <span className="italic font-extralight text-sm mb-2">
                Role Number : {student.rolNum}
              </span>
              <p className="text-lg font-bold">Name : {student.student_name}</p>
              <p className="text-lg font-bold">
                Class: {student.student_class}
              </p>
              <button
                onClick={() => deleteStudent(student.rolNum)}
                className="text-red-800 underline italic mt-2"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <h1>Don't hava any students Yet</h1>
        )}
      </ul>
    </div>
  );
}
