import styled, { css, keyframes } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => {
    return css`
      height: calc(100% - 80px);
      width: 100%;
      max-width: 1200px;

      margin: 0 auto;
    `;
  }}
`;

export const ListContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      align-items: flex-start;
      justify-content: space-around;
      gap: ${theme.sizes.medium};

      width: 100%;
      height: 100%;

      margin-top: ${theme.sizes.medium};

      padding-bottom: ${theme.sizes.xbig};

      overflow-y: scroll;

      /* width */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #e3e3e3;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.secondary};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `;
  }}
`;

export const LoadMoreContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      padding: ${theme.sizes.big} 0;

      grid-column: span 3;

      @media (max-width: 940px) {
        grid-column: span 2;
      }

      @media (max-width: 600px) {
        grid-column: auto;
      }
    `;
  }}
`;

export const LoadMoreButton = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: "Sofia Sans", sans-serif;
      font-size: ${theme.sizes.medium};
      color: ${theme.colors.primary};
      font-weight: bold;

      border: 2px solid transparent;

      background-color: ${theme.colors.secondary};

      border-radius: 999px;

      padding: ${theme.sizes.small} ${theme.sizes.small};

      cursor: pointer;

      transition: all 0.2s ease-in-out;

      &:hover {
        background: transparent;
        border-color: ${theme.colors.secondary};
        color: ${theme.colors.secondary};
      }

      &:disabled {
        cursor: default;

        background: transparent;
        border-color: ${theme.colors.secondary};
      }
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

export const TinyLoader = styled.div`
  ${({ theme }) => {
    return css`
      width: 24px;
      height: 24px;

      border: 2px solid #e3e3e3;
      border-radius: 50%;

      border-top-color: ${theme.colors.secondary};

      margin: 0 ${theme.sizes.big};

      animation: ${spin} 1s infinite ease-in-out;
    `;
  }}
`;
