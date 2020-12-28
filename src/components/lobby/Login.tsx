import React, { useState, ChangeEvent } from 'react';
import { Button, TextField, makeStyles, Typography, Box } from '@material-ui/core';
import { LobbyScreenProps } from '../../Lobby';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  form: {
    marginBottom: 12
  }
});

export const Login = (props: LobbyScreenProps) => {

  const classes = useStyles();
  const [name, setName] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <Box className={classes.root}>
      <Typography variant='h5' gutterBottom>
        Welcome to Taiwanese Farmers Market
        </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={onNameChange}
        />
      </form>
      <Button
        variant='contained'
        color='primary'
        disabled={name === ''}
        onClick={() => props.handleEnterLobby(name)}>
        Submit
      </Button>
    </Box>
  );
}