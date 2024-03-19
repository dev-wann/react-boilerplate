import { useContext } from 'react';
import ModalContext from './ModalContext';
import ModalProvider from './ModalProvider';

export default function ModalWithContext() {
  return (
    <ModalProvider>
      <h1>Test modals implemented with useContext.</h1>
      <SampleComponent />
    </ModalProvider>
  );
}

function SampleComponent() {
  const modalController = useContext(ModalContext);

  const openSimpleModal = () => {
    modalController?.push({
      id: crypto.randomUUID(),
      title: 'Simple Modal',
      content: (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          dolorem fuga, qui culpa odio facilis doloribus? Voluptatem
          necessitatibus impedit molestias quo, quasi totam earum repudiandae
          natus quaerat officiis, expedita rem!
        </p>
      ),
      accept: () => {
        window.alert('Accepted');
        modalController.pop();
      },
      cancel: () => {
        modalController.pop();
      },
    });
  };

  const openNestedModal = () => {
    modalController?.push({
      id: crypto.randomUUID(),
      title: 'Nested Modal',
      content: (
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            dolorem fuga, qui culpa odio facilis doloribus? Voluptatem
            necessitatibus impedit molestias quo, quasi totam earum repudiandae
            natus quaerat officiis, expedita rem!
          </p>
          <button onClick={openSimpleModal}>Open Simple Modal</button>
        </>
      ),
      accept: () => {
        window.alert('Accepted');
        modalController.pop();
      },
      cancel: () => {
        modalController.pop();
      },
    });
  };

  return (
    <>
      <button onClick={openSimpleModal}>Open Simple Modal</button>
      <br />
      <br />
      <button onClick={openNestedModal}>Open Nested Modal</button>
    </>
  );
}
