import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { MyTableHead } from '../components/myTableHead';

export const MyTable = ({ children }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='list table'>
        <MyTableHead />
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
