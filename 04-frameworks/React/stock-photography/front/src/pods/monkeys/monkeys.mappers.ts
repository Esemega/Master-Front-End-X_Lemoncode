import * as am from './api/api.model';
import * as vm from './monkeys.vm';

export const mapMonkeyPictureListToVM = (
  data: am.PictureInfo[]
): vm.PictureInfo[] => data.map(mapMonkeyPictureToVM);

const mapMonkeyPictureToVM = (data: am.PictureInfo): vm.PictureInfo => ({
  id: data.id,
  picUrl: data.picUrl,
  title: data.title,
  selected: false,
});
