import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

// export const mapHotelFromVmToApi = (hotel: viewModel.Hotel): apiModel.Hotel =>
//   ({
//     ...hotel,
//     id: hotel.id,
//     name: hotel.name,
//     shortDescription: hotel.description,
//     hotelRating: hotel.rating,
//     address1: hotel.address,
//     city: hotel.city,
//   } as unknown as apiModel.Hotel);

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: `${character.id}`,
  name: character.name,
  specie: character.species,
  origin: character.origin.name,
});
