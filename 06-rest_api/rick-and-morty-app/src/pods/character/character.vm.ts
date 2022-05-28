export interface Character {
  id: string;
  name: string;
  specie: string;
  origin: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  specie: '',
  origin: '',
});
