import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useModalStore from './ModalStore';

export default function ModalContainer() {
  const modalInfos = useModalStore((state) => state.getModalInfos());
  const modalContainer = document.getElementById('modal-container');

  // create a parent HTML element of the ModalContainer
  useEffect(() => {
    if (document.getElementById('modal-container')) return; // guard
    const elem = document.createElement('div');
    elem.setAttribute('id', 'modal-container');
    document.body.appendChild(elem);
  }, []);

  if (!modalContainer) return <></>; // guard
  return createPortal(
    <>
      {modalInfos.map((info) => (
        <div className="modal-wrapper" key={info.id}>
          {/* translucent background */}
          <div className="modal-bg" />

          {/* modal */}
          <div className="modal">
            <h1 className="modal-title">{info.title}</h1>
            <div className="modal-content">{info.content}</div>
            <div className="modal-btns">
              <button onClick={info.accept}>Accept</button>
              <button onClick={info.cancel}>Cancel</button>
            </div>
          </div>
        </div>
      ))}
    </>,
    modalContainer
  );
}
