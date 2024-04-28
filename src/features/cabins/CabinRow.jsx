import styled from "styled-components";
import "../../styles/index.css";

import { formatCurrency } from "../../utils/helpers";
import "../../styles/index.css";
import { useRef, useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";

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
  const [openMenu, setOpenMenu] = useState("false");
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
  function handleOpen() {
    setOpenMenu((openMenu) => !openMenu);
  }
  console.log(cabin);
  return (
    <>
      <Table.Row>
        {/* <Img src={image} /> */}
        <Img src={typeof image === "string" ? image : image.name} />
        <Cabin>{name}</Cabin>
        <div className="min">Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div className="relative">
          <div onClick={() => handleOpen()} className="click">
            <HiOutlineDotsVertical />
          </div>
          {openMenu == true ? (
            <div className="flex">
              <button
                className="addCabin"
                onClick={handleDuplicate}
                disabled={isCreating}
              >
                Copy
              </button>
              <button
                className="addCabin"
                onClick={() => setShowForm((showForm) => !showForm)}
              >
                Edit
              </button>
              <button
                onClick={() => deleteCabin(cabinId)}
                disabled={isDeleting}
                className="addCabin "
              >
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </Table.Row>
      {showForm && (
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
