import { useState } from "react";
import "../styles/index.css";
import BookingForm from "../features/bookings/BookingForm";
import GuestForm from "../features/bookings/GuestForm";
export default function AddBooking() {
  const [form, setForm] = useState(1);
  const [name, setName] = useState("");

  return (
    <>
      <h1> Add Booking</h1>
      {form == 1 && <GuestForm setForm={setForm} setName={setName} />}
      {form == 2 && <BookingForm name={name} />}
    </>
  );
}
