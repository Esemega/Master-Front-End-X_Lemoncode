import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { OrgContext } from '../org.context';
import { useDebounce } from 'use-debounce';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as classes from './list.styles';

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

  const handlePreviousPage = () => setPage((prevPage) => prevPage - 1);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  React.useEffect(() => {
    handleRequest();
  }, [page, debouncedNameSearched]);

  return (
    <>
      <Typography variant='h2'>Characters from Ricky and Morty</Typography>
      <TextField
        label='Search by name'
        type='text'
        value={nameSearched}
        onChange={(e) => setNameSearched(e.target.value)}
      />
      <Button
        type='button'
        onClick={handleRequest}
        variant='outlined'
        color='primary'
      >
        Search
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label='list table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Avatar</TableCell>
              <TableCell align='right'>Id</TableCell>
              <TableCell align='right'>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((character) => (
              <TableRow key={character.id}>
                <TableCell>
                  <img src={character.image} style={{ width: '2rem' }} />
                </TableCell>
                <TableCell align='right'>{character.id}</TableCell>
                <TableCell align='right'>
                  <Link
                    to={generatePath('/character-detail/:id', {
                      id: character.id,
                    })}
                  >
                    {character.name}
                  </Link>{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.buttonsContainer}>
        <Button
          type='button'
          onClick={handlePreviousPage}
          variant='outlined'
          color='secondary'
          disabled={page <= INITIAL_PAGE}
        >
          Previous page
        </Button>
        <Button
          type='button'
          onClick={handleNextPage}
          variant='outlined'
          color='secondary'
          disabled={page >= characters.length}
        >
          Next page
        </Button>
      </div>
    </>
  );
};
