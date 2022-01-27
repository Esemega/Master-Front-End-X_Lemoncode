import { PictureInfo } from './api.model';
import { mockPictureList } from './mock-data';

let pictureList = [...mockPictureList];

export const getPictureInfo = async (id: string): Promise<PictureInfo> => {
  return pictureList.find(picture => picture.id === id);
};
