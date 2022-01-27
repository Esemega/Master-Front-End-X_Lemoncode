import React from 'react';
import { getMonkeysPictures } from './api/api';
import { MonkeyPictureList } from './monkeys.component';
import { mapMonkeyPictureListToVM } from './monkeys.mappers';
import { PictureInfo } from './monkeys.vm';

export const MonkeyPictureListContainer: React.FC = () => {
  const [list, setList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getMonkeysPictures()
      .then(mapMonkeyPictureListToVM)
      .then(setList);
  }, []);

  return <MonkeyPictureList list={list} />;
};
