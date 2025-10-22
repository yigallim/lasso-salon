import { create } from "zustand";

type ScrolledStore = {
  scrolled: boolean;
  scroll: () => void;
  unscroll: () => void;
};

const useScrolled = create<ScrolledStore>()((set) => ({
  scrolled: false,
  scroll: () => set(() => ({ scrolled: true })),
  unscroll: () => set(() => ({ scrolled: false })),
}));

export default useScrolled;
