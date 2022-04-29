import React from 'react';

import Button from '@material-ui/core/Button';

import * as classes from './navButtons.styles';

export const NavButtons = (props) => {
  const { initialPage, page, setPage, list } = props;

  const handlePreviousPage = () => setPage((prevPage) => prevPage - 1);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className={classes.buttonsContainer}>
      <Button
        type='button'
        onClick={handlePreviousPage}
        variant='outlined'
        color='secondary'
        disabled={page <= initialPage}
      >
        Previous page
      </Button>
      <Button
        type='button'
        onClick={handleNextPage}
        variant='outlined'
        color='secondary'
        disabled={page >= list.length}
      >
        Next page
      </Button>
    </div>
  );
};
