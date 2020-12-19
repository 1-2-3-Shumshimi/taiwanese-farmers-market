import React from 'react';
import { BoardProps } from 'boardgame.io';
import { Game } from '../../Game';
import { Button, Container, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const IntroPhase = (props: BoardProps<Game>) => {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='h3' gutterBottom>
        Select your Basic Chef
      </Typography>
      <Grid container justify='center' spacing={4} direction='column'>

      </Grid>
    </Container>
  )
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 12
  }
})
