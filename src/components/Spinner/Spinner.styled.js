import styled from "styled-components";

export const Div = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: 6rem;
  height: 6rem;
  border: 5px solid ${({ theme }) => theme.teal};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.bg};
  animation: spinner 0.6s linear infinite;
  margin: 200px auto;
`;
