import { create } from "zustand";

export const useStudentStore = create((set, get) => ({
  students: JSON.parse(localStorage.getItem("students_data")) || [],

  addStudent: (data) => {
    const newStudent = [...get().students, data];
    localStorage.setItem("students_data", JSON.stringify(newStudent));
    set({ students: newStudent });
  },
  delStudent: (rolNum) => {
    const newStudent = get().students.filter((s) => s.rolNum !== rolNum);
    localStorage.setItem("students_data", JSON.stringify(newStudent));
    set({ students: newStudent });
  },
}));
