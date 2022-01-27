import React from 'react';
import { CatPictureListContainer } from 'pods/cats/cats.container';
import { AppLayout } from 'layouts/app.layout';

export const CatsScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <h1>Hello from Cats Scene</h1>
        <CatPictureListContainer />
      </AppLayout>
    </>
  );
};
