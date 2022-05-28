import { ApiResponse, CharacterEntityApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './character.mock-data';

// export const getHotel = async (id: string): Promise<Hotel> => {
//   return mockHotelCollection.find((h) => h.id === id);
// };

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };

const apiBaseUrl = process.env.API_BASE_URL;

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  console.log('id', id);
  const response = await fetch(`${apiBaseUrl}/character/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};
