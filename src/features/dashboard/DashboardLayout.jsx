import styled from "styled-components";
import { useCabins } from "../cabins/useCabins";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { Stats } from "./Stats";
import { SalesChart } from "./SalesChart";
import { DurationChart } from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 1rem;
  font-size: 1.2em;
`;

export default function DashboardLayout() {
  const { bookings, isLoading, numDays } = useRecentBookings();
  const { stays, isLoading: isStaying } = useRecentStays();
  const { cabins, isLoading: isLoading2 } = useCabins();
  if (isLoading || isStaying || isLoading2) return <Spinner />;
  console.log(bookings, stays);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={stays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={stays} />

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
