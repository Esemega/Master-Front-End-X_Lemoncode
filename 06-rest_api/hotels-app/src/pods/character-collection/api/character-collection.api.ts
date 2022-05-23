import { ApiResponse } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
const apiBaseUrl = process.env.API_BASE_URL;

export const getCharacterCollection = async (): Promise<ApiResponse> => {
  const response = await fetch(`${apiBaseUrl}/character`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${apiBaseUrl}/character/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};
