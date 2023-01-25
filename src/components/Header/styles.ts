import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      width: 100%;

      z-index: 5;

      background: ${theme.colors.primary};

      filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.12));
    `;
  }}
`;

export const Content = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 1200px;
      width: 100%;

      padding: ${theme.sizes.medium};

      margin: 0 auto;
    `;
  }}
`;

export const Logo = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;

      svg {
        width: ${theme.sizes.xgiant};
        height: auto;

        margin-right: ${theme.sizes.small};
      }

      h2 {
        font-family: "Sofia Sans", sans-serif;
        font-weight: 800;
        font-size: ${theme.sizes.xbig};
      }
    `;
  }}
`;

export const MenuLinks = styled.ul`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      gap: ${theme.sizes.medium};

      list-style: none;
    `;
  }}
`;

interface LinkProps {
  selected?: boolean;
}

export const Link = styled.li<LinkProps>`
  ${({ theme, selected }) => {
    return css`
      a {
        font-family: "Sofia Sans", sans-serif;
        font-size: ${theme.sizes.medium};
        text-decoration: none;

        color: ${selected ? theme.colors.secondary : theme.colors.content};

        transition: color 0.2s ease-in-out;
      }

      &:hover a {
        color: ${theme.colors.secondary};
      }
    `;
  }}
`;
