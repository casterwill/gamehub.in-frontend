import axios from "axios";
import { create } from "zustand";

const baseURL = "http://localhost:3000";

export const useRegisterEndpoint = create((set) => ({
  registerLoading: false,
  registerError: null,
  register: async (username, email, password) => {
    set({ loading: true });
    try {
      await axios.post(`${baseURL}/api/auth/register`, {
        username,
        email,
        password,
      });
      set({ error: null });
    } catch (error) {
      set({ error: "Something went wrong"});
    } finally {
      set({ loading: false });
    }
  },
})
);