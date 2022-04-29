import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { OrgProvider } from './org.context';

ReactDOM.render(
  <div>
    <OrgProvider>
      <App />
    </OrgProvider>
  </div>,
  document.getElementById('root')
);
