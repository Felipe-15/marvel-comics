import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      max-width: 1200px;

      margin: 0 auto;
      padding-top: ${theme.sizes.big};
    `;
  }}
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Loader = styled.div`
  ${({ theme }) => {
    return css`
      width: 80px;
      height: 80px;

      border: 6px solid #e3e3e3;
      border-radius: 50%;

      border-top-color: ${theme.colors.secondary};

      margin-right: ${theme.sizes.big};

      animation: ${spin} 1s infinite ease-in-out;
    `;
  }}
`;

export const Text = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.xbig};

      max-width: 300px;
    `;
  }}
`;
