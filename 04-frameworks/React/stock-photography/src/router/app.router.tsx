import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { CatsScene, MonkeysScene } from '../scenes';
import { switchRoutes } from './routes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<CatsScene />} />
        <Route path={switchRoutes.cats} element={<CatsScene />} />
        <Route path={switchRoutes.monkeys} element={<MonkeysScene />} />
      </Routes>
    </HashRouter>
  );
};
