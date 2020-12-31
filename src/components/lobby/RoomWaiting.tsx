import React, { useState, ChangeEvent } from 'react';
import { makeStyles, Typography, Box, Theme, createStyles, List, ListItem, ListItemText, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Backdrop, CircularProgress } from '@material-ui/core';
import { LobbyScreenProps, Room } from '../../Lobby';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: 12,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 12
  }
}));

interface RoomWaitingProps extends LobbyScreenProps {
  gameID: string
}

export const RoomWaiting = (props: RoomWaitingProps) => {

  const classes = useStyles();
  const room = props.rooms.find(r => r.gameID === props.gameID);

  if (!room) {
    return (
      <Typography variant='h6' gutterBottom>
        Error! Cannot find room.
      </Typography>
    );
  }

  const getPlayerID = () => {
    return `${room.players.find(p => p.name === props.playerName)?.id}`
  }

  const onClickStartGame = () => {
    props.handleStartGame(
      props.gameComponents[0].game.name,
      { gameID: props.gameID, numPlayers: room.players.length, playerID: getPlayerID() }
    );
  }

  return (
    <Box className={classes.root}>
      <Typography variant='h4' gutterBottom>
        {`${room.gameName}: ${room.gameID}`}
      </Typography>
      <List className={classes.container}>
        {room.players.map((p) => {
          return (
            <ListItem key={p.name || p.id}>
              <ListItemText primary={p.name || `Waiting for player ${p.id + 1}...`} />
            </ListItem>
          );
        })}
      </List>
      <Button
        variant='contained'
        color='primary'
        disabled={room.players.filter(p => p.name).length !== room.players.length}
        onClick={onClickStartGame}>
        Enter game
      </Button>
    </Box>
  )
}