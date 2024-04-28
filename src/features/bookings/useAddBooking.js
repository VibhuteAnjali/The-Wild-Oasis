import { useMutation } from "@tanstack/react-query";
import { addBooking as addBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
export function useAddBooking() {
  const { mutate: addBooking, isLoading } = useMutation({
    mutationFn: addBookingApi,
    onSuccess: () => {
      toast.success("New Booking added Succesfully!");
    },
    onError: (err) => {
      toast.error("Failed to add new booking");
      console.log(err.message);
    },
  });
  return { addBooking, isLoading };
}
