// import styled from "styled-components";

// const Tag = styled.span`
//   width: fit-content;
//   text-transform: uppercase;
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 0.4rem 1.2rem;
//   border-radius: 100px;

//   /* Make these dynamic, based on the received prop */
//   color: var(--color-${(props) => props.type}-700);
//   background-color: var(--color-${(props) => props.type}-100);
// `;

// export default Tag;
import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;
  /* color: #30d984 */

  /* Dynamic styling based on the received prop */
  color: ${(props) => {
    switch (props.type) {
      case "unconfirmed":
        return "#1a779c";
      case "checked-in":
        return "darkgreen";
      default:
        return "black"; // Add a default color if needed
    }
  }}!important;

  background-color: ${(props) => {
    switch (props.type) {
      case "unconfirmed":
        return "#a1cdf3";
      case "checked-in":
        return "#7ae3ae";
      default:
        return "silver"; // Add a default background color if needed
    }
  }}!important;
`;

export default Tag;
