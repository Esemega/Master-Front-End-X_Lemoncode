export interface Character {
  id: string;
  name: string;
  specie: string;
  origin: string;
  episode: string[];
  bestSentences?: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  specie: '',
  origin: '',
  episode: [''],
  bestSentences: [''],
});
