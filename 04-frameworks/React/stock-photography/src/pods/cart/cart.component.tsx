import React from 'react';

import { PictureInfo } from './cart.vm';
import { CartContext } from 'core/providers/cart.context';

interface Props {
  pictureList: Array<PictureInfo>;
}
export const CartPictureList: React.FC<Props> = props => {
  const { pictureList } = props;

  const { pictureIdList, setPictureIdList } = React.useContext(CartContext);

  return (
    <div style={{ border: '1px solid #000' }}>
      <ul>
        {pictureList.map(picture => (
          <li key={picture.id}>
            <img src={picture.picUrl} alt={picture.title} width="50px" />
            <p>{picture.title}</p>
            <button
              onClick={() => {
                console.log('Delete picture.id', picture.id);
                console.log('pictureIdList', pictureIdList);
                setPictureIdList(pictureIdList.filter(id => id !== picture.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
