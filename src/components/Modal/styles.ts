import styled, { css, keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0;
    padding-right: 400px;
  }
  to {
    padding-right: 0;
  }
`;

export const Background = styled.div`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      background: rgba(0, 0, 0, 0.2);

      width: 100%;
      height: 100%;

      z-index: 10;

      animation: ${fadein} 0.5s ease-in-out;
    `;
  }}
`;
