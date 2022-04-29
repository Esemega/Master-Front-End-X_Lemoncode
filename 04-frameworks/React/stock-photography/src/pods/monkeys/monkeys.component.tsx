import React from 'react';

import { PictureInfo } from './monkeys.vm';
import { Picture } from 'common/components/Picture';

interface Props {
  list: PictureInfo[];
}

export const MonkeyPictureList: React.FC<Props> = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(picture => (
        <Picture key={picture.id} pictureInfo={picture} />
      ))}
    </ul>
  );
};
