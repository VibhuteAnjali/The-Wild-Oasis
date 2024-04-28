import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 1.4rem 4rem;

      /* Box */
      padding: 4rem 4rem;
      border: 1px solid black;
      border-radius: 0.5em;
      overflow: hidden;
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  background-color: white;
`;

export default Form;
