import * as am from './api/api.model';
import * as vm from './cats.vm';

export const mapCatPictureListToVM = (
  data: am.PictureInfo[]
): vm.PictureInfo[] => data.map(mapCatPictureToVM);

const mapCatPictureToVM = (data: am.PictureInfo): vm.PictureInfo => ({
  id: data.id,
  picUrl: data.picUrl,
  title: data.title,
  selected: false,
});
