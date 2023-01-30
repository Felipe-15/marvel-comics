import styled, { css } from "styled-components";

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

      padding: ${theme.sizes.big};

      border-radius: ${theme.sizes.tiny};
    `;
  }}
`;

export const DataContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
    `;
  }}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;

      width: fit-content;
      height: 300px;

      background: blue;

      overflow: hidden;

      border-radius: ${theme.sizes.tiny};

      margin-bottom: ${theme.sizes.medium};
      margin-right: ${theme.sizes.medium};

      filter: drop-shadow(8px 4px 6px rgba(0, 0, 0, 0.1));
    `;
  }}
`;

export const Image = styled.img`
  ${({ theme }) => {
    return css`
      width: auto;
      height: 100%;
    `;
  }}
`;

export const DetailsContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
    `;
  }}
`;

export const Title = styled.h3`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.big};

      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;

export const Info = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      font-weight: 600;

      margin-bottom: ${theme.sizes.xsmall};
    `;
  }}
`;

export const WishButton = styled.button`
  ${({ theme }) => {
    return css`
      border: none;
      background: ${theme.colors.secondary};

      color: ${theme.colors.primary};
      font-size: ${theme.sizes.big};
      font-family: "Sofia Sans", sans-serif;
      font-weight: 600;

      width: 100%;

      padding: ${theme.sizes.xsmall} 0;

      border: 2px solid ${theme.colors.secondary};
      border-radius: ${theme.sizes.tiny};

      cursor: pointer;

      transition: all 0.2s ease-in-out;

      &:hover {
        background: transparent;
        color: ${theme.colors.secondary};
      }
    `;
  }}
`;
