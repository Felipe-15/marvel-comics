import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;

      height: 100vh;
      width: 100vw;
    `;
  }}
`;
