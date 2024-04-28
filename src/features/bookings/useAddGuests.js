import { useMutation } from "@tanstack/react-query";
import { addGuest as addGuestsApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
export function useAddGuests() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mutate: addGuest, isLoading } = useMutation({
    mutationFn: addGuestsApi,
    onSuccess: (guestData) => {
      toast.success("New Guest added Succesfully!");
      const id = guestData[0].id;
      searchParams.set("guestId", id);
      setSearchParams(searchParams);
      console.log("addGuest.js: ", guestData[0].id);
    },
    onError: (err) => {
      toast.error("Failed to add new guests");
      console.log(err.message);
    },
  });
  return { addGuest, isLoading };
}
