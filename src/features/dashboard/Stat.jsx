import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1rem;
  background-color: white;
  border-radius: 0.5em;
  height: 66%;
  align-items: center;
`;

const Icon = styled.div`
  width: 86%;
  margin-left: 1em;
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: #24260f;
  color: white;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
  margin-bottom: -1em;
  text-align: center;
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
  text-align: center;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <div>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </div>
    </StyledStat>
  );
}

export default Stat;
