import React, { useState } from 'react';
import { BoardProps } from 'boardgame.io';
import { Game } from '../../Game';
import { Button, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ChefCard } from '../cards/ChefCard';
import { getPlayerID } from '../../utils/Functions';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 12
  },
  button: {
    marginBottom: 8
  },
  gridItem: {
    width: 400
  }
});

export const IntroPhase = (props: BoardProps<Game>) => {

  const classes = useStyles();
  const [selectedChef, setSelectedChef] = useState<number | null>(null);
  const onClickChefCard = (chefId: number) => {
    if (selectedChef === chefId) {
      setSelectedChef(null);
    } else {
      setSelectedChef(chefId);
    }
  }
  const onClickSelectButton = () => {
    props.moves.selectBasicChef(selectedChef);
  }

  return (
    <Container className={classes.root}>
      <Typography variant='h3' gutterBottom>
        Select your Basic Chef
      </Typography>
      {selectedChef !== null &&
        <Button variant='contained' color='primary' className={classes.button} onClick={onClickSelectButton}>
          Select
        </Button>
      }
      <Grid container justify='center' spacing={4} direction='column'>
        {props.G.players[getPlayerID(props)].basicChefOptions.map((chef) => (
          <Grid key={chef.id} item className={classes.gridItem}>
            <ChefCard
              data={chef}
              isSelected={selectedChef === chef.id}
              onClick={() => onClickChefCard(chef.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};
