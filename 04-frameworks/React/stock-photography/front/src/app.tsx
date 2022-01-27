import React from 'react';
import { hot } from 'react-hot-loader/root';

import { AppRouter } from 'router/app.router';
import { CartProvider } from 'core/providers/cart.context';

const App: React.FunctionComponent = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default hot(App);
