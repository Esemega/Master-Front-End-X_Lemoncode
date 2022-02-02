import React from 'react';

import { PictureInfo } from './picture.model';
import { CartContext } from 'core/providers/cart.context';

interface Props {
  pictureInfo: PictureInfo;
}

export const Picture: React.FC<Props> = props => {
  const { pictureInfo } = props;

  const { pictureIdList, setPictureIdList } = React.useContext(CartContext);
  const [selectedCheck, setSelectedCheck] = React.useState(false);

  const handleCheckbox = e => {
    const idCheckbox = e.target.value;
    const checked = e.target.checked;

    //Update the Context
    if (checked && !pictureIdList.some(id => id === idCheckbox)) {
      setPictureIdList([...pictureIdList, idCheckbox]);
    }

    //Toggle selected property from pictureInfo
    pictureInfo.selected = !pictureInfo.selected;
  };

  React.useEffect(() => {
    pictureInfo.selected = pictureIdList.some(id => id === pictureInfo.id);
    setSelectedCheck(pictureInfo.selected);
  }, [pictureIdList]);

  return (
    <li>
      <img src={pictureInfo.picUrl} alt={pictureInfo.title} width="150px" />
      <p>{pictureInfo.title}</p>

      <label>
        Buy
        <input
          type="checkbox"
          id="selectedPicture"
          value={pictureInfo.id}
          onChange={handleCheckbox}
          checked={selectedCheck}
        />
      </label>
    </li>
  );
};
