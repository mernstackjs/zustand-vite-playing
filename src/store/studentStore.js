import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStudentStore = create(
  persist(
    (set) => ({
      students: [],

      addStudent: (data) => {
        set((state) => ({
          students: [...state.students, data],
        }));
      },
      delStudent: (rolNum) => {
        set((state) => ({
          students: state.students.filter((s) => s.rolNum !== rolNum),
        }));
      },
    }),
    {
      name: "students_data",
    },
  ),
);
