import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      align-items: flex-start;
      justify-content: space-around;
      gap: ${theme.sizes.medium};

      width: 100%;
      max-width: 1200px;

      margin: 0 auto;

      padding: ${theme.sizes.xbig} 0;
    `;
  }}
`;
