import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const MyTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align='right'>Avatar</TableCell>
        <TableCell align='right'>Id</TableCell>
        <TableCell align='right'>Name</TableCell>
      </TableRow>
    </TableHead>
  );
};
