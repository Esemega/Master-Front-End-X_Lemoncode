import React from 'react';
import { Link } from 'react-router-dom';

import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <nav>
          <Link to='/list'>Lista de miembros por organización</Link>
          <Link to='/characters'>Lista personajes de Rick and Morty</Link>
        </nav>
      </header>

      <main className={classes.main}>{children}</main>

      <footer className={classes.footer}>
        Sonia Garcia Alcaraz &copy; 2022
      </footer>
    </div>
  );
};
