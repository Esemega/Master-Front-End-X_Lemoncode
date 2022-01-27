import * as am from './api/api.model';
import * as vm from './cart.vm';

export const mapCartToVM = (data: am.PictureInfo): vm.PictureInfo => ({
  id: data.id,
  picUrl: data.picUrl,
  title: data.title,
  selected: false,
});
