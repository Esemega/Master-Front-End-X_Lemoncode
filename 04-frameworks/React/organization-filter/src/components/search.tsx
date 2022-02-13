import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Search = (props) => {
  const { label, value, onChange, onClick } = props;

  return (
    <>
      <TextField
        label={label}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button
        type='button'
        onClick={onClick}
        variant='outlined'
        color='primary'
      >
        Search
      </Button>
    </>
  );
};
