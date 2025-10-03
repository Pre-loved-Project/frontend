import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  isLogined: boolean;
  setAccessToken: (token: string | null) => void;
  setIsLogined: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLogined: false,
      setAccessToken: (token) => set({ accessToken: token }),
      setIsLogined: (value) => set({ isLogined: value }),
      logout: () => set({ accessToken: null, isLogined: false }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ isLogined: state.isLogined }),
    },
  ),
);
