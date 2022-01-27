import React from 'react';
import { getPictureInfo } from './api/api';
import { CartPictureList } from './cart.component';
import { mapCartToVM } from './cart.mappers';
import { PictureInfo } from './cart.vm';
import { CartContext } from 'core/providers/cart.context';

export const CartContainer: React.FC = () => {
  const { pictureIdList } = React.useContext(CartContext);
  const [list, setList] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    setList([]);
    pictureIdList.forEach(pictureId => {
      getPictureInfo(pictureId)
        .then(mapCartToVM)
        .then(pictureInfo => {
          setList(oldList => [...oldList, pictureInfo]);
        });
    });
  }, [pictureIdList]);

  return (
    <>
      <h3>Cart Container</h3>
      <CartPictureList pictureList={list} />
    </>
  );
};
