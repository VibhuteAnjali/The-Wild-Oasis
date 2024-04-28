import Tag from "../../ui/Tag";
import styled from "styled-components";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import "../../styles/index.css";
const StyledTodayItem = styled.li`
  /* display: grid;
  grid-template-columns: 9rem 7rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid lightgrey;

  &:first-child {
    border-top: 1px solid lightgrey;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
export function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="unconfirmed">Ariving</Tag>}
      {status === "checked-in" && <Tag type="checked-in">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country} `} />

      <Guest>{guests.fullName}</Guest>
      <div className="ml-4">{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          className="small-btn"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check In
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}
