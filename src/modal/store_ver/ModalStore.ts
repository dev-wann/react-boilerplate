import { create } from 'zustand';
import ModalInfo from '../ModalInfo';

type State = {
  modalInfos: ModalInfo[];
};
type Action = {
  pop: () => void;
  push: (info: ModalInfo) => void;
  clear: () => void;
};

const useModalStore = create<State & Action>((set, get) => ({
  modalInfos: [],

  pop: () => {
    if (get().modalInfos.length === 1) {
      document.body.classList.remove('prevent-scroll');
    }
    set((state) => ({ modalInfos: state.modalInfos.slice(0, -1) }));
  },

  push: (info: ModalInfo) => {
    document.body.classList.add('prevent-scroll');
    set((state) => ({ modalInfos: [...state.modalInfos, info] }));
  },

  clear() {
    set(() => ({ modalInfos: [] }));
  },
}));

export default useModalStore;
