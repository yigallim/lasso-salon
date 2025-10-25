import { create } from "zustand";

type SidebarStore = {
  open: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const useSidebar = create<SidebarStore>()((set) => ({
  open: false,
  openSidebar: () => set(() => ({ open: true })),
  closeSidebar: () => set(() => ({ open: false })),
  toggleSidebar: () => set((state) => ({ open: !state.open })),
}));

export default useSidebar;
