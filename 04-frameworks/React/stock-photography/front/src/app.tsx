import React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppRouter } from 'router/app.router';

const App: React.FunctionComponent = () => {
  return <AppRouter />;
};

export default hot(App);
