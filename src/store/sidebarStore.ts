import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  navigationActive: string;
  serverBarActive: string;
  setNavigationActive: (item: string) => void;
  setServerBarActive: (item: string) => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      navigationActive: "/",
      serverBarActive: "/",
      setNavigationActive: (item) => set({ navigationActive: item }),
      setServerBarActive: (item) => set({ serverBarActive: item }),
    }),
    {
      name: "sidebar-storage",
    }
  )
);
