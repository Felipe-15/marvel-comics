import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;

      width: 300px;

      cursor: pointer;

      &:hover img {
        scale: 1.05;
      }
    `;
  }}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;

      width: 300px;
      height: fit-content;

      margin-bottom: ${theme.sizes.small};

      overflow: hidden;

      filter: drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.15));
    `;
  }}
`;

export const Image = styled.img`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: auto;

      align-self: center;

      transition: scale 0.2s ease-in-out;
    `;
  }}
`;

export const Title = styled.h3`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-weight: 800;
      font-size: ${theme.sizes.big};

      margin-bottom: ${theme.sizes.small};
    `;
  }}
`;

export const DetailsContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    `;
  }}
`;

export const Author = styled.span`
  ${({ theme }) => {
    return css`
      font-weight: 600;
      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};

      margin-bottom: ${theme.sizes.medium};
    `;
  }}
`;

export const Year = styled.span`
  ${({ theme }) => {
    return css``;
  }}
`;
