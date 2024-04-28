import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.2em;
  padding: 0.8rem 1.2rem;
  width: 12em;
  padding: 1em;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: white;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

export default function Select({ options, value, onChange }) {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
