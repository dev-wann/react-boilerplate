import ModalInfo from '../ModalInfo';

export default class ModalController {
  modalInfos: ModalInfo[];
  triggerRerender: () => void;

  constructor(setFlag: React.Dispatch<React.SetStateAction<number>>) {
    this.modalInfos = [];
    this.triggerRerender = () => setFlag((prev) => prev + 1);
  }

  pop() {
    if (this.modalInfos.length <= 0) return;
    this.modalInfos.pop();

    // enable scroll when there's no modal left
    if (this.modalInfos.length === 0) {
      document.body.classList.remove('prevent-scroll');
    }

    // rerender
    this.triggerRerender();
  }

  push(info: ModalInfo) {
    this.modalInfos.push(info);

    // disable scroll
    document.body.classList.add('prevent-scroll');

    // rerender
    this.triggerRerender();
  }

  clear() {
    this.modalInfos = [];
  }
}
