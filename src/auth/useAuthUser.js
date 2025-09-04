import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const baseURL = "http://localhost:3000";
export const useAuthUser = create((set, get) => ({
  token: null,
  loading: false,
  error: null,

  formData: {
    username: "",
    email: "",
    password: "",
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () => set({
    formData: {
      username: "",
      email: "",
      password: "",
    }
  }),

  signin: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { email, password } = get().formData;
      const response = await axios.post(`${baseURL}/api/auth/signin`, {
        email, password
      });
      toast.success("Login successful!");
      get().resetForm();
      set({ token: response.data.token, error: null });
    } catch (error) {
      set({ error: "Something went wrong"});
      toast.error("Login failed. Please check your credentials.");
    } finally {
      set({ loading: false });
    }
  },

  signup: async (e) => {
    e.preventDefault();
    set({ loading: true });
    try {
      const { username, email, password } = get().formData;
      const response = await axios.post(`${baseURL}/api/auth/signup`, {
        username, email, password
      });
      toast.success("Signup successful!");
      get().resetForm();
      set({ token: response.data.token, error: null });
    } catch (error) {
      set({ error: "Something went wrong"});
      toast.error("Signup failed. Please try again.");
    } finally {
      set({ loading: false });
    }
  },
})
);