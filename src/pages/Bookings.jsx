import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

import "../styles/index.css";
import { useNavigate } from "react-router-dom";
function Bookings() {
  const navigate = useNavigate();
  function handleAdd() {
    navigate("/addBooking");
  }
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <button className="addBtn" onClick={handleAdd}>
          +
        </button>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
