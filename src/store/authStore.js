import { create } from "zustand";

const users = [
  { id: 1, email: "ahmed@gmail.com", password: "12" },
  { id: 2, email: "hamda@gmail.com", password: "12" },
  { id: 3, email: "hani@gmail.com", password: "12" },
];

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("userInfo")) || null,

  logIn: (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!foundUser) {
      alert("Invalid email or password");
      return;
    }

    const userInfo = {
      uid: foundUser.id,
      email: foundUser.email,
      isLoggedIn: true,
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    set({ user: userInfo });

    return true;
  },

  logOut: () => {
    localStorage.removeItem("userInfo");
    set({ user: null });
  },
}));
