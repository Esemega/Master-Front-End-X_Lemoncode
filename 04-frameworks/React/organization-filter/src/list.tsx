import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { OrgContext } from './org.context';

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

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const getMembers = (organization, limit = 5, page = 1) => {
  return fetch(
    `https://api.github.com/orgs/${organization}/members?per_page=${limit}&page=${page}`
  ).then((response) => response.json());
};

const INITIAL_PAGE = 1;
const LIMIT = 5;

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const { organization, setOrganization } = React.useContext(OrgContext);

  const handleRequest = () => {
    getMembers(organization, LIMIT, page).then((members) =>
      setMembers(members)
    );
  };

  const handlePreviousPage = () => setPage((prevPage) => prevPage - 1);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  React.useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <>
      <Typography variant='h2'>Hello from List page</Typography>
      <Typography variant='h3'>{organization.toUpperCase()}</Typography>
      <TextField
        label='Organization'
        type='text'
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
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
            {members.map((member) => (
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
          disabled={page >= members.length}
        >
          Next page
        </Button>
      </div>
    </>
  );
};
