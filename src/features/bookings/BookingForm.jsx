import "../../styles/index.css";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useAddBooking } from "./useAddBooking";
import { useSearchParams } from "react-router-dom";
export default function BookingForm() {
  const [searchParms] = useSearchParams();
  const { addBooking, isLoading } = useAddBooking();

  const id = searchParms.get("guestId");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function OnSubmit(data) {
    const { cabinPrice, extrasPrice, numNights, numGuests } = data;

    // Calculate totalPrice
    const totalPrice =
      (Number(cabinPrice) + Number(extrasPrice)) *
      Number(numNights) *
      Number(numGuests);
    data.totalPrice = totalPrice;

    // setInfo(data);
    addBooking({ ...data, guestId: id });
    reset();
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(OnSubmit)}>
        <FormRow error={errors?.startDate?.message} label="Start Date">
          <Input
            type="date"
            id="startDate"
            {...register("startDate", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow error={errors?.endDate?.message} label="End Date">
          <Input
            type="date"
            id="endDate"
            {...register("endDate", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow error={errors?.numNights?.message} label="Number of Nights">
          <Input
            type="number"
            id="numNights"
            {...register("numNights", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow error={errors?.numGuests?.message} label="Number of Guests">
          <Input
            type="number"
            id="numGuests"
            {...register("numGuests", {
              required: "Field Cannot be Empty",
              minLength: {
                value: 1,
                message: "Must be at least one guest.",
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.cabinPrice?.message} label="Cabin Price">
          <Input
            type="number"
            id="cabinPrice"
            {...register("cabinPrice", {
              required: "Field Cannot be Empty",
              min: {
                value: 1,
                message: "Price must be more than $0",
              },
            })}
          />
        </FormRow>

        <FormRow
          error={errors?.extrasPrice?.message}
          label="Extra Price (if Breakfast Included)"
        >
          <Input type="number" id="extrasPrice" {...register("extrasPrice")} />
        </FormRow>

        <FormRow error={errors?.status?.message} label="Status">
          <Input
            type="text"
            id="status"
            {...register("status", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow
          error={errors?.hasBreakfast?.message}
          label="Is Breakfast Included?"
        >
          <input
            type="checkbox"
            id="hasBreakfast"
            {...register("hasBreakfast")}
          />
        </FormRow>

        <FormRow error={errors?.isPaid?.message} label="Has the guest paid?">
          <input type="checkbox" id="isPaid" {...register("isPaid")} />
        </FormRow>
        <FormRow
          error={errors?.observations?.message}
          label="Observation(if any)"
        >
          <Input type="text" id="observations" {...register("observations")} />
        </FormRow>
        <FormRow error={errors?.cabinId?.message} label="Cabin No">
          <Input
            type="number"
            id="cabinId"
            {...register("cabinId", {
              required: "Field cannot be empty",
            })}
          />
        </FormRow>
        <div className="buttonBox">
          <Button type="submit" className="addCabin" disabled={isLoading}>
            Submit
          </Button>
          <Button type="reset" className="addCabin">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
}
