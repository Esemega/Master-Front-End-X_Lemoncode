import React from 'react';
import { Link } from 'react-router-dom';

import { switchRoutes } from 'router/routes';
import { CartContainer } from 'pods/cart/cart.container';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  const [cartIsVisible, setCartIsVisible] = React.useState(false);

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <nav>
          <Link to={switchRoutes.cats}>Gatetes</Link>
          <Link to={switchRoutes.monkeys}>Monetes</Link>
        </nav>
        <button onClick={() => setCartIsVisible(!cartIsVisible)}>
          {!cartIsVisible ? 'Show' : ' Hide'} cart
        </button>
      </header>

      <main className={classes.main}>{children}</main>
      {cartIsVisible && (
        <aside className={classes.sidebar}>
          <CartContainer />
        </aside>
      )}

      <footer className={classes.footer}>
        Sonia Garcia Alcaraz &copy; 2022
      </footer>
    </div>
  );
};
