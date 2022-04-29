import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const CharacterRow = (props) => {
  const { character } = props;

  return (
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
  );
};
