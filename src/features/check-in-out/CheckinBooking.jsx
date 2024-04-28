import { useEffect, useState } from "react";
import styled from "styled-components";
import "../../styles/index.css";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import "../../styles/index.css";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import CheckBox from "../../ui/Checkbox";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSetting } from "../settings/useSetting";
const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmedPaid] = useState(false);
  const [addBreakfast, setaddBreakfast] = useState(false);

  const { booking, isLoading } = useBooking();
  const { setting, isLoading: isLoadingSettings } = useSetting();

  useEffect(() => {
    setConfirmedPaid(booking?.isPaid || false);
  }, [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();
  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  console.log(setting.BreakfastPrice);
  const { BreakfastPrice = 0 } = setting || {};
  let optionalBreakfast = BreakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        Breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfast,
          totalPrice: totalPrice + optionalBreakfast,
        },
      });
    } else {
      checkin({ bookingId, Breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <CheckBox
            checked={addBreakfast}
            onChange={() => {
              setaddBreakfast(!addBreakfast);
              setConfirmedPaid(false);
            }}
            id="breakfast"
          >
            Want to add Breakfast for {formatCurrency(optionalBreakfast)}?
          </CheckBox>
        </Box>
      )}
      <Box>
        <CheckBox
          className="big"
          checked={confirmPaid}
          onChange={() => setConfirmedPaid(!confirmPaid)} // Fix here
          // disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid the full amount{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfast
              )} (${formatCurrency(totalPrice)}+${formatCurrency(
                optionalBreakfast
              )})`}
        </CheckBox>
      </Box>
      <ButtonGroup>
        <Button
          className="addCabin"
          onClick={handleCheckin}
          // disabled={!confirmPaid || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
