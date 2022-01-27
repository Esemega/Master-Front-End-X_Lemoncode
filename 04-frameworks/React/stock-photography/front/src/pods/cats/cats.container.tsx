import React from 'react';
import { getCatsPictures } from './api/api';
import { CatPictureList } from './cats.component';
import { mapCatPictureListToVM } from './cats.mappers';
import { PictureInfo } from './cats.vm';

export const CatPictureListContainer: React.FC = () => {
  const [list, setList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    getCatsPictures()
      .then(mapCatPictureListToVM)
      .then(setList);
  }, []);

  return <CatPictureList list={list} />;
};
