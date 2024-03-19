import ModalContainer from './ModalContainer';
import useModalStore from './ModalStore';

export default function ModalWithStore() {
  return (
    <>
      <h1>Test Modals implemented with zustand store</h1>
      <SampleComponent />
      <ModalContainer />
    </>
  );
}

function SampleComponent() {
  const pop = useModalStore((state) => state.pop);
  const push = useModalStore((state) => state.push);

  const openSimpleModal = () => {
    push({
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
        pop();
      },
      cancel: () => {
        pop();
      },
    });
  };

  const openNestedModal = () => {
    push({
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
        pop();
      },
      cancel: () => {
        pop();
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
