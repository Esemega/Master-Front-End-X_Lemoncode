import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterEntityApi, getCharacterCollection } from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(
        mapToCollection(
          result.results as CharacterEntityApi[],
          mapCharacterFromApiToVm
        )
      )
    );
  };

  return { characterCollection, loadCharacterCollection };
};
