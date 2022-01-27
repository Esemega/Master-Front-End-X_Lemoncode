import React from 'react';

import { PictureInfo } from './cats.vm';
import { Picture } from './components/Picture';

interface Props {
  list: PictureInfo[];
}

export const CatPictureList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(picture => (
        <Picture key={picture.id} pictureInfo={picture} />
      ))}
    </ul>
  );
};
