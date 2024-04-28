import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { useRef, useState } from "react";

// export default function AddCabin() {
//   return (
//     <Modal>
//       <Modal.Open opens="cabin-form">
//         <button className="addCabin">Add new Cabin</button>
//       </Modal.Open>
//       <Modal.Window name="cabin-form">
//         <CreateCabinForm />
//       </Modal.Window>
//       {/* <Modal.Open opens="table">
//         <button className="addCabin">Add new Cabin
//         </button>
//       </Modal.Open>
//       <Modal.Window name="table">
//         <CreateCabinForm />
//       </Modal.Window> */}
//     </Modal>
//   );
// }

export default function AddCabin() {
  const ref = useRef();
  const [isOpenModel, setIsOpenModal] = useState(false);
  return (
    <div ref={ref}>
      <button
        className="addCabin inline"
        onClick={() => setIsOpenModal((showForm) => !showForm)}
      >
        Add a new Cabin
      </button>
      {isOpenModel && (
        <Modal onClose={() => setIsOpenModal(false)} Cref={ref}>
          {" "}
          <CreateCabinForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}
