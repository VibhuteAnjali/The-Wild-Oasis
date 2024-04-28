import styled from "styled-components";
import "../styles/index.css";
const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;
export default function ErrorFallback({ resetErrorBoundary }) {
  return (
    <>
      <StyledErrorFallback>
        <Box>
          <h2>Something went wrong 😔!..</h2>
          <h3>
            Try reloading the page , if the error presists please contact the
            provider.
          </h3>
          <button className="addCabin" onClick={() => resetErrorBoundary()}>
            Try Again
          </button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}
