import React from 'react';

import { PictureInfo } from './monkeys.vm';

interface Props {
  list: PictureInfo[];
}

export const MonkeyPictureList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(picture => (
        <li key={picture.id}>
          <img src={picture.picUrl} alt={picture.title} />
        </li>
      ))}
    </ul>
  );
};
