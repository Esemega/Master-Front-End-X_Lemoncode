import { PictureInfo } from './api.model';
import { mockMonkeyPictureList } from './mock-data';

let monkeyPictureList = [...mockMonkeyPictureList];

export const getMonkeysPictures = async (): Promise<PictureInfo[]> => {
  return monkeyPictureList;
};
