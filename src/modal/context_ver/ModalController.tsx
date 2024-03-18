import { ReactNode } from 'react';

export type ModalInfo = {
  id: string;
  title: string;
  content: ReactNode;
  accept: () => void;
  cancel: () => void;
};

export default class ModalController {
  stack: ModalInfo[];
  triggerRerender: () => void;

  constructor(setFlag: React.Dispatch<React.SetStateAction<number>>) {
    this.stack = [];
    this.triggerRerender = () => setFlag((prev) => prev + 1);
  }

  getModalInfos() {
    return this.stack;
  }

  pop() {
    if (this.stack.length <= 0) return;
    this.stack.pop();

    // enable scroll when there's no modal left
    if (this.stack.length === 0) {
      document.body.classList.remove('prevent-scroll');
    }

    // rerender
    this.triggerRerender();
  }

  push(info: ModalInfo) {
    this.stack.push(info);

    // disable scroll
    document.body.classList.add('prevent-scroll');

    // rerender
    this.triggerRerender();
  }

  clear() {
    this.stack = [];
  }
}
