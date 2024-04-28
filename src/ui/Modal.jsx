import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useEffect } from "react";
// import { cloneElement, createContext, useContext, useState } from "react";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: lightgrey;
  padding: 2.2rem 1rem;
  transition: all 0.5s;
  border: 1px solid lightgrey;
  padding-top: 0em;
  padding-bottom: 0em;
  width: 53em;
  margin-bottom: 34em;
  /* overflow: scroll; */
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f1f1f122;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

// const ModalContext = createContext();

// function Modal({ children }) {
//   const [openName, setOpenName] = useState("");
//   const close = () => setOpenName("");
//   const open = () => setOpenName;

//   return (
//     <ModalContext.Provider value={{ openName, close, open }}>
//       {children}
//     </ModalContext.Provider>
//   );
// }

// function Open({ children, opens: opensWindowName }) {
//   const { open } = useContext(ModalContext);
//   return cloneElement(children, { onClick: () => open(opensWindowName) });
// }
// function Window({ children, name }) {
//   const { openName, close } = useContext(ModalContext);
//   if (name !== openName) return null;

//   return createPortal(
//     <Overlay>
//       <StyledModal>
//         <Button onClick={close}>
//           <AiOutlineClose />
//         </Button>
//         <div>{children}</div>
//       </StyledModal>
//     </Overlay>,
//     document.body
//   );
// }
// Modal.Open = Open;
// Modal.Window = Window;
// export default Modal;

export default function Modal({ children, onClose, Cref: ref }) {
  useEffect(
    function () {
      console.log(ref);
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("clicked Outside");
          onClose();
        }
      }
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [onClose, ref]
  );
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={() => onClose()}>
          <AiOutlineClose />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
