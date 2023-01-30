import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;

      width: 300px;
      height: 540px;

      border-radius: ${theme.sizes.tiny};

      background: #fff;

      filter: drop-shadow(4px 8px 8px rgba(0, 0, 0, 0.15));

      &::before {
        content: "";
        position: absolute;
        left: 0;

        display: block;

        background: ${theme.colors.secondary};

        border-radius: ${theme.sizes.tiny};

        height: 100%;
        width: 0;

        transition: width 0.4s ease-in-out;
      }

      &:hover::before {
        width: 100%;
      }

      &:hover {
        h3,
        span {
          color: ${theme.colors.primary};
        }

        button {
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
        }

        button:hover {
          color: ${theme.colors.primary};
          background: transparent;
          border-color: ${theme.colors.primary};
        }
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

      width: 100%;
      height: fit-content;
      padding: ${theme.sizes.tiny};
      padding-bottom: 0;

      z-index: 7;

      overflow: hidden;
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

export const ContentContainer = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      display: flex;
      flex-direction: column;

      padding: ${theme.sizes.small};
    `;
  }}
`;

export const Title = styled.h3`
  ${({ theme }) => {
    return css`
      font-family: "Sofia Sans", sans-serif;
      font-weight: 800;
      font-size: ${theme.sizes.big};

      word-wrap: break-word;

      max-width: 100%;

      line-height: 2.4rem;
      max-height: 4.8rem;
      height: 100%;

      overflow: hidden;

      margin-bottom: ${theme.sizes.small};

      max-lines: 2;
      overflow: ellipsis;

      transition: color 0.4s ease-in-out;
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

      transition: color 0.4s ease-in-out;
    `;
  }}
`;

export const SeeMoreButton = styled.button`
  ${({ theme }) => {
    return css`
      border: 2px solid transparent;
      border-radius: ${theme.sizes.tiny};

      background: transparent;

      padding: ${theme.sizes.tiny} ${theme.sizes.small};

      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      font-weight: bold;
      color: ${theme.colors.content};

      transition: all 0.4s ease-in-out;

      cursor: pointer;
    `;
  }}
`;
