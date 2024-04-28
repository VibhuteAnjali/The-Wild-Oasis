// import styled from "styled-components";
import "../styles/index.css";
// const StyledLogo = styled.div`
//   text-align: center;
// `;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

function Logo() {
  return (
    <div className="imgContainer">
      <img src="/logo-light.png" alt="Logo" className="logo" />
    </div>
  );
}

export default Logo;
