import React from 'react';

import { MonkeyPictureListContainer } from 'pods/monkeys/monkeys.container';
import { AppLayout } from 'layouts/app.layout';

export const MonkeysScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <h1>Hello from Mokeys Scene</h1>
        <MonkeyPictureListContainer />
      </AppLayout>
    </>
  );
};
