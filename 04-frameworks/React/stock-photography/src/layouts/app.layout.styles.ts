import { css } from '@emotion/css';

export const layout = css`
  display: grid;
  grid-template-columns: auto 0.25fr;
  grid-template-rows: 0.25fr auto 0.25fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header header'
    'main sidebar'
    'footer footer';
`;

export const header = css`
  grid-area: header;
`;

export const main = css`
  grid-area: main;
`;

export const sidebar = css`
  grid-area: sidebar;
`;

export const footer = css`
  grid-area: footer;
`;
