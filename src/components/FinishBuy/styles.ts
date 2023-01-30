import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      background: ${theme.colors.primary};

      min-width: 500px;
      max-width: 600px;
      width: fit-content;

      min-height: 400px;

      padding: ${theme.sizes.big};
      padding-top: ${theme.sizes.huge};

      border-radius: ${theme.sizes.tiny};

      div {
        margin-bottom: ${theme.sizes.medium};
      }
    `;
  }}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
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
      font-size: ${theme.sizes.xbig};

      margin-right: ${theme.sizes.medium};
    `;
  }}
`;

export const Image = styled.img`
  ${({ theme }) => {
    return css`
      width: ${theme.sizes.xbig};
      height: ${theme.sizes.xbig};
    `;
  }}
`;

export const ComicTitle = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.big};

      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;
export const Address = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};

      margin-bottom: ${theme.sizes.small};
    `;
  }}
`;

export const Message = styled.span`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};

      margin-bottom: ${theme.sizes.big};
    `;
  }}
`;

export const CloseButton = styled.button`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      font-weight: bold;
      color: ${theme.colors.secondary};

      background-color: transparent;
      border: 2px solid ${theme.colors.secondary};
      border-radius: ${theme.sizes.tiny};

      padding: ${theme.sizes.xsmall} ${theme.sizes.small};

      cursor: pointer;

      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #f0f0f0;
      }
    `;
  }}
`;
