import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => {
    return css`
      height: calc(100% - 80px);
      width: 100%;
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
      max-width: 1200px;
      height: 100%;

      margin: 0 auto;

      padding: ${theme.sizes.xbig} 0;

      overflow-y: scroll;
    `;
  }}
`;
