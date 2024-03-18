import { create } from 'zustand';
import ModalInfo from '../ModalInfo';

type State = {
  stack: ModalInfo[];
};
type Action = {
  getModalInfos: () => ModalInfo[];
  pop: () => void;
  push: (info: ModalInfo) => void;
  clear: () => void;
};

const useModalStore = create<State & Action>((set, get) => ({
  stack: [],

  getModalInfos: () => {
    return get().stack;
  },

  pop: () => {
    if (get().stack.length === 1) {
      document.body.classList.remove('prevent-scroll');
    }
    set((state) => ({ stack: state.stack.slice(0, -1) }));
  },

  push: (info: ModalInfo) => {
    document.body.classList.add('prevent-scroll');
    set((state) => ({ stack: [...state.stack, info] }));
  },

  clear() {
    set(() => ({ stack: [] }));
  },
}));

export default useModalStore;
