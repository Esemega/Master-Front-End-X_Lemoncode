import React from 'react';
import { Link } from 'react-router-dom';

import { switchRoutes } from 'router/routes';
import { CartContainer } from 'pods/cart/cart.container';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to={switchRoutes.cats}>Gatetes</Link>
          <Link to={switchRoutes.monkeys}>Monetes</Link>
        </nav>
      </header>

      <aside>
        <CartContainer />
      </aside>
      <main>{children}</main>

      <footer>Sonia Garcia Alcaraz &copy; 2022</footer>
    </div>
  );
};
