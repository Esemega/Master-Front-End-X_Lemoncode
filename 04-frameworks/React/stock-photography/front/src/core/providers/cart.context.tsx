import React from 'react';

interface CartContextModel {
  pictureIdList: Array<string>;
  setPictureIdList: (pictureIdList: Array<string>) => void;
}

export const CartContext = React.createContext<CartContextModel>({
  pictureIdList: [],
  setPictureIdList: (pictureIdList: Array<string>) => {
    console.log('Did you forgot to add CartContext on top of your app?');
  },
});

export const CartProvider: React.FC = props => {
  const { children } = props;

  const [pictureIdList, setPictureIdList] = React.useState([]);

  return (
    <CartContext.Provider value={{ pictureIdList, setPictureIdList }}>
      {children}
    </CartContext.Provider>
  );
};
