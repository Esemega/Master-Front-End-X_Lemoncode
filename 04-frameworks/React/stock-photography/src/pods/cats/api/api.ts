import { PictureInfo } from './api.model';
import { mockCatPictureList } from './mock-data';

let catPictureList = [...mockCatPictureList];

export const getCatsPictures = async (): Promise<PictureInfo[]> => {
  return catPictureList;
};
