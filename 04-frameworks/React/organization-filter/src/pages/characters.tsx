import React from 'react';
import { useDebounce } from 'use-debounce';

import Typography from '@material-ui/core/Typography';

import { MyTable } from '../components/myTable';
import { CharacterRow } from '../components/characterRow';
import { Search } from '../components/search';
import { NavButtons } from '../components/navButtons';

import { AppLayout } from '../layouts/app.layout';

interface CharacterEntity {
  id: string;
  name: string;
  image: string;
}

const getCharacters = (page = 1, name?) => {
  return fetch(
    `https://rickandmortyapi.com/api/character?page=${page}${
      name ? `&name=${name}` : ''
    }`
  ).then((response) => response.json());
};

const INITIAL_PAGE = 1;

export const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const [nameSearched, setNameSearched] = React.useState('');
  const [debouncedNameSearched] = useDebounce(nameSearched, 2000);

  const handleRequest = () => {
    getCharacters(page, nameSearched).then((data) =>
      setCharacters(data.results)
    );
  };

  React.useEffect(() => {
    handleRequest();
  }, [page, debouncedNameSearched]);

  return (
    <AppLayout>
      <Typography variant='h2'>Characters from Ricky and Morty</Typography>

      <Search
        label='Search by name'
        value={nameSearched}
        onChange={setNameSearched}
        onClick={handleRequest}
      />

      <MyTable>
        {characters.map((character) => (
          <CharacterRow character={character} key={character.id} />
        ))}
      </MyTable>

      <NavButtons
        initialPage={INITIAL_PAGE}
        page={page}
        setPage={setPage}
        list={characters}
      />
    </AppLayout>
  );
};
