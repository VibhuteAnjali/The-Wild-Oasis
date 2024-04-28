import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  background-color: white;
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: #0000003e;
  }
`;

export function SalesChart({ bookings, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  const data = allDates.map((date) => {
    return {
      label: format(date, "MM dd"),
      totalSales: bookings
        .filter((bookings) => isSameDay(date, new Date(bookings.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: bookings
        .filter((bookings) => isSameDay(date, new Date(bookings.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });
  return (
    <StyledSalesChart>
      <h2>
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </h2>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" />
          <YAxis unit="$" />
          <CartesianGrid strokeDasharray={4} />
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="black"
            fill="blue"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke="black"
            fill="blue"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}
