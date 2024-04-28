import styled from "styled-components";
import "../../styles/index.css";

import { formatCurrency } from "../../utils/helpers";
import "../../styles/index.css";
import { useRef, useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

import { FaEdit, FaTrash, FaCopy } from "react-icons/fa";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.5fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  background-color: white;
  font-family: "Roboto Mono";
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 4.2em;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-family: "Roboto Mono";
  font-size: 1em;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Roboto Mono";
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Roboto Mono";
  font-family: "Sono";
  font-weight: 600;
  color: green;
`;

function CabinRow({ cabin }) {
  const ref = useRef();
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const [showForm, setShowForm] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    description,
    discount,
    image,
  } = cabin;
  function handleDuplicate() {
    const imageName = `${Math.random()}-${image.name}`.replace("/", "");
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      description,
      discount,
      image: { name: imageName },
    });
  }

  console.log(cabin);
  return (
    <>
      <TableRow role="row">
        {/* <Img src={image} /> */}
        <Img src={typeof image === "string" ? image : image.name} />
        <Cabin>{name}</Cabin>
        <div className="min">Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div className="flex">
          <button
            className="addCabin"
            onClick={handleDuplicate}
            disabled={isCreating}
          >
            <FaCopy />
          </button>
          <button
            className="addCabin"
            onClick={() => setShowForm((showForm) => !showForm)}
          >
            <FaEdit />
          </button>
          <button
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            className="addCabin "
          >
            <FaTrash />
          </button>
        </div>
      </TableRow>
      {showForm && (
        // <CreateCabinForm cabinToEdit={cabin} setShowForm={setShowForm} />
        <Modal onClose={() => setShowForm(false)} Cref={ref}>
          {" "}
          <CreateCabinForm
            onClose={() => setShowForm(false)}
            cabinToEdit={cabin}
          />
        </Modal>
      )}
    </>
  );
}
export default CabinRow;
