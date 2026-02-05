import React from "react";
import { useSchoolStore } from "../store/schoolStore";

export default function School() {
  return (
    <div>
      <h1>School Management System</h1>

      <div className="grid gap-3 grid-cols-3">
        <AddSchool />
        <ListSchools />
      </div>
    </div>
  );
}

const ListSchools = () => {
  const schools = useSchoolStore((state) => state.schools);
  console.log(schools);
  return (
    <div className="col-span-2 border rounded-2xl p-5">
      <h1>Schools</h1>
      <ul className="grid md:grid-cols-3 gap-2">
        {schools?.length !== 0 ? (
          schools?.map((school) => (
            <li className="border rounded-2xl p-3" key={school.id}>
              <h1 className="text-lg font-bold">{school.school_name}</h1>
              have {school.school_students} students
            </li>
          ))
        ) : (
          <h1>You Don't have any school yet</h1>
        )}
      </ul>
    </div>
  );
};
const AddSchool = () => {
  const addSchool = useSchoolStore((state) => state.addSchool);
  const schools = useSchoolStore((state) => state.schools);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const school_name = formData.get("school_name");
    const school_students = formData.get("school_students");
    console.log(school_students);
    const school = {
      id: Math.floor(Math.random() * 100),
      school_name,
      school_students,
    };

    addSchool(school);
    console.log(schools);
    e.target.reset();
  };
  return (
    <div className="col-span-1 border rounded-2xl p-5">
      <h1>Add School</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="school_name"
          className="p-3 border rounded-lg "
          placeholder="Enter School Name"
        />
        <input
          name="school_students"
          className="p-3 border rounded-lg my-3"
          placeholder="Enter Number of Students "
        />
        <button className="bg-blue-700 text-white px-7 py-3 rounded-md font-bold text-lg">
          Add School
        </button>
      </form>
    </div>
  );
};
