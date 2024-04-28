import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin as CreateCabinApi } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: CreateCabinApi,
    onSuccess: () => {
      toast.success("New Cabin successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error("Failed to create new Cabin");
      console.log(err.message);
    },
  });
  return { isCreating, createCabin };
}
