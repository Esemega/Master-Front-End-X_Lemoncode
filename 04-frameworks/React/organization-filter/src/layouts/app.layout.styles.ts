import { css } from '@emotion/css';

export const layout = css`
  display: grid;
  grid-template-rows: 0.25fr auto 0.25fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

export const header = css`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;

    a {
      padding: 0.5em;
    }
  }
`;

export const main = css`
  grid-area: main;
`;

export const footer = css`
  grid-area: footer;
  padding: 0.5em;
`;
