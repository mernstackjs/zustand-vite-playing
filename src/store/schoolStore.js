import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSchoolStore = create(
  persist(
    (set) => ({
      schools: [],

      addSchool: (data) => {
        set((state) => ({
          schools: [...state.schools, data],
        }));
      },
    }),
    { name: "school_data" },
  ),
);
