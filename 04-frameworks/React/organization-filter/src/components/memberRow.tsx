import React from 'react';
import { Link, generatePath } from 'react-router-dom';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const MemberRow = (props) => {
  const { member } = props;

  return (
    <TableRow key={member.id}>
      <TableCell>
        <img src={member.avatar_url} style={{ width: '2rem' }} />
      </TableCell>
      <TableCell align='right'>{member.id}</TableCell>
      <TableCell align='right'>
        <Link to={generatePath('/detail/:id', { id: member.login })}>
          {member.login}
        </Link>{' '}
      </TableCell>
    </TableRow>
  );
};
