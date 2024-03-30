import './App.css';
import SampleForm from './form/components/SampleForm';
import ModalWithContext from './modal/context_ver/ModalWithContext';
import ModalWithStore from './modal/store_ver/ModalWithStore';

function App() {
  return (
    <div className="App">
      <ModalWithContext />
      <ModalWithStore />
      <SampleForm />
      <ScrollPlaceholder />
    </div>
  );
}

function ScrollPlaceholder() {
  return (
    <div
      style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'silver' }}
    >
      <h1 style={{ margin: '0' }}>Placeholder for scroll test</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum nisi
        enim nobis repellendus ad. Quis ratione excepturi maxime quae illo eius
        perspiciatis veritatis quasi. Quae doloremque quis totam aut soluta
        repellendus, placeat ratione explicabo enim, perspiciatis, consequuntur
        aspernatur dolores dolore quas? Cumque nihil aliquid, numquam blanditiis
        id rem consequuntur facere distinctio repudiandae ducimus temporibus
        corrupti consequatur velit laboriosam porro in fugiat esse aliquam,
        deleniti ipsum. Culpa, aut commodi ipsa sint et aliquam qui distinctio
        dolore minima nihil iusto quibusdam nisi omnis quam sunt ex nulla
        possimus tenetur in numquam suscipit nemo earum deleniti quis. Iusto
        commodi sint, accusamus mollitia fuga excepturi distinctio atque
        exercitationem voluptatem! Ratione saepe quaerat doloribus magnam, velit
        officia voluptatem molestias, dolorum aspernatur maiores cupiditate
        possimus nisi officiis consectetur quibusdam quas. Deleniti accusantium
        repudiandae dolorum molestias asperiores ratione ab aliquid in, odit
        architecto deserunt praesentium aspernatur illum nobis voluptates sunt
        minima, dolores explicabo facere quis doloremque possimus consequatur
        rerum! Amet, deserunt. Ullam facilis laborum reprehenderit similique
        magnam quos labore corrupti quae voluptatibus a. Quod ratione quasi rem
        et eaque consequatur labore dicta cupiditate odio fuga nihil pariatur
        incidunt suscipit, accusantium quas praesentium veniam placeat,
        explicabo omnis, nesciunt vel inventore harum! Quam, perferendis
        officiis distinctio, aspernatur nulla architecto porro ratione libero
        officia asperiores, deserunt aut doloremque. Ea sequi facilis totam
        aliquid pariatur blanditiis nobis laboriosam, dolorem voluptatum laborum
        voluptatibus ullam temporibus, nesciunt harum ipsa odit culpa tempore
        esse magni, nihil ducimus. Doloremque, mollitia? Ullam deserunt magnam
        iure impedit necessitatibus voluptate. Iusto magnam reiciendis itaque
        sunt dicta expedita dolore unde officia quibusdam quia tempora modi
        officiis nisi adipisci, neque velit beatae rerum voluptate vitae eum, ut
        consequatur qui. Mollitia, officiis. Voluptate unde eius possimus
        commodi provident non, explicabo, dignissimos nam laudantium minima
        exercitationem nulla fugiat delectus numquam amet voluptatem esse,
        adipisci qui perspiciatis earum? Quas, quos praesentium temporibus
        quaerat inventore adipisci saepe minus dolores non fugiat cumque autem.
        Suscipit quidem aperiam ipsam omnis deserunt vel fuga ad sed perferendis
        maiores. Autem sequi veniam eum. Veritatis, animi! Unde sed ab explicabo
        possimus nulla ipsa, exercitationem veritatis soluta non ad saepe! Ipsam
        cum ut recusandae, voluptatibus commodi ipsa. Repellat corporis
        dignissimos quaerat fugiat modi at voluptates? Eos pariatur iste
        officiis rerum. Quis, fugit eveniet quo fuga officia minus! Ipsam id
        libero sequi vero corrupti sapiente, voluptatibus autem nemo nihil
        tempore. Enim unde doloremque ab dicta quo aperiam commodi? Cum porro
        dolores magnam officia laborum, dicta, iure necessitatibus ipsa non
        debitis nisi veniam nam placeat vitae, fugit quasi numquam laudantium a
        nulla. At repudiandae veritatis fugiat maxime quaerat, omnis iure
        dignissimos pariatur unde quis esse adipisci nulla alias consectetur eum
        nesciunt? Voluptatem, magni perspiciatis voluptas nesciunt velit eveniet
        assumenda? Error unde pariatur reiciendis, animi nesciunt veritatis
        provident et, expedita quae voluptas est numquam enim natus adipisci
        consequatur dolorem eum sed, cumque sapiente a minima exercitationem
        minus dicta. Odit tempore impedit magnam dolorem dicta, qui quod error
        nobis fugit corrupti dolor rem velit in natus fuga nulla eum doloribus
        neque tempora vitae totam officiis nostrum. Sed eius repellat autem
        reiciendis, quam veniam pariatur.
      </p>
    </div>
  );
}

export default App;
