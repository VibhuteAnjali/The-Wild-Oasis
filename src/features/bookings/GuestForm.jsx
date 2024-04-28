import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

import "../../styles/index.css";
import { useAddGuests } from "./useAddGuests";
import { getFlagCDNUrl } from "../../utils/GetFlag";
export default function GuestForm({ setForm }) {
  const { addGuest, isLoading } = useAddGuests();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function OnSubmit(data) {
    const flag = await getFlagCDNUrl(data.nationality);
    console.log(flag.flagUrl);
    addGuest({ ...data, countryFlag: flag.flagUrl });
    setForm(2);
    reset();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(OnSubmit)}>
        <FormRow error={errors?.fullName?.message} label="Name of the Guest">
          <Input
            type="text"
            id="fullName"
            {...register("fullName", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow error={errors?.email?.message} label="Email">
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>
        <FormRow error={errors?.nationality?.message} label="Nationality">
          <Input
            type="text"
            id="nationality"
            {...register("nationality", {
              required: "Field Cannot be Empty",
            })}
          />
        </FormRow>

        <FormRow error={errors?.nationalId?.message} label="National Id">
          <Input
            type="number"
            id="nationalID"
            {...register("nationalID", {
              required: "Field Cannot be Empty",
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
