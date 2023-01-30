import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background: ${theme.colors.primary};

      min-width: 500px;
      max-width: 600px;
      width: fit-content;

      min-height: 400px;

      padding: ${theme.sizes.big};

      border-radius: ${theme.sizes.tiny};

      div {
        margin-bottom: ${theme.sizes.medium};
      }
    `;
  }}
`;

interface LoadProps {
  show: boolean;
}

export const ContentContainer = styled.div<LoadProps>`
  ${({ theme, show }) => {
    return css`
      display: ${show ? "flex" : "none"};
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
  }}
`;

export const Title = styled.h3`
  ${({ theme }) => {
    return css`
      text-align: center;
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.big};

      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.sizes.medium};

      width: 100%;
    `;
  }}
`;

export const CancelButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: ${theme.sizes.xsmall} ${theme.sizes.medium};

      border: 2px solid ${theme.colors.secondary};
      border-radius: ${theme.sizes.tiny};

      background: transparent;

      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      font-weight: bold;
      color: ${theme.colors.secondary};

      cursor: pointer;

      transition: background-color 0.2s ease-in;

      &:hover {
        background-color: #f1f1f1;
      }
    `;
  }}
`;

export const FinishButton = styled.button`
  ${({ theme }) => {
    return css`
      padding: ${theme.sizes.xsmall} ${theme.sizes.medium};

      border: transparent;
      border-radius: ${theme.sizes.tiny};

      background: ${theme.colors.secondary};

      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      font-weight: bold;
      color: ${theme.colors.primary};

      cursor: pointer;

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.2);
      }
    `;
  }}
`;

export const LoaderContainer = styled.div<LoadProps>`
  ${({ theme, show }) => {
    return css`
      display: ${show ? "flex" : "none"};
      align-items: center;
      justify-content: center;

      padding: ${theme.sizes.xsmall};
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
      width: 40px;
      height: 40px;

      border: 3px solid #e3e3e3;
      border-radius: 50%;

      border-top-color: ${theme.colors.secondary};

      margin-right: ${theme.sizes.big};

      animation: ${spin} 1s infinite ease-in-out;
    `;
  }}
`;
export const TinyLoader = styled.div`
  ${({ theme }) => {
    return css`
      width: 20px;
      height: 20px;

      border: 3px solid #e3e3e3;
      border-radius: 50%;

      border-top-color: ${theme.colors.primary};

      margin-right: ${theme.sizes.big};

      animation: ${spin} 1s infinite ease-in-out;
    `;
  }}
`;

export const Message = styled.p`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.big};

      text-align: center;
      line-height: 20px;
    `;
  }}
`;
