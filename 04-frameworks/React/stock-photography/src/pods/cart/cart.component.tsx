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
    <div>
      <ul>
        {pictureList.map(picture => (
          <li key={picture.id}>
            <img src={picture.picUrl} alt={picture.title} width="50px" />
            <p>{picture.title}</p>
            <button
              onClick={() => {
                setPictureIdList(pictureIdList.filter(id => id !== picture.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {Boolean(pictureIdList.length) && (
        <button
          onClick={() => {
            setPictureIdList([]);
          }}
        >
          Empty
        </button>
      )}
    </div>
  );
};
