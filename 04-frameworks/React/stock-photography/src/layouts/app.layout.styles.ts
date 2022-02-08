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

export const sidebar = css`
  grid-area: sidebar;
  border-left: 1px solid black;
  padding: 0.5em;

  ul {
    list-style-type: none;
    margin-block-start: 0;
    padding-inline-start: 0;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
    }
  }
`;

export const footer = css`
  grid-area: footer;
`;
