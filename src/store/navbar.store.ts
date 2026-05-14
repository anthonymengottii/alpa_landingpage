import { create } from "zustand";

type State = {
  linkActive: string;
};

type Action = {
  setLinkActive: (linkActive: State["linkActive"]) => void;
};

export const useNavbarStore = create<State & Action>((set) => ({
  linkActive: "",
  setLinkActive: (linkActive) => set(() => ({ linkActive })),
}));
