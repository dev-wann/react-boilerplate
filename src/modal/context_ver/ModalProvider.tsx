import { useEffect, useState } from 'react';
import ModalContainer from './ModalContainer';
import ModalContext from './ModalContext';
import ModalController from './ModalController';

type Props = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: Props) {
  const [_, setFlag] = useState(0);
  const [modalController] = useState(() => new ModalController(setFlag));

  // empty ModalInfos when unmount
  useEffect(() => {
    return modalController.clear();
  }, []);

  return (
    <ModalContext.Provider value={modalController}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
}
