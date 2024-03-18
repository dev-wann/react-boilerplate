import { ReactNode } from 'react';

type ModalInfo = {
  id: string;
  title: string;
  content: ReactNode;
  accept: () => void;
  cancel: () => void;
};

export default ModalInfo;
