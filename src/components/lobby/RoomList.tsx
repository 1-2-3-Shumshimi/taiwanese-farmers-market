import React, { useState, ChangeEvent } from 'react';
import { makeStyles, Typography, Box, Theme, createStyles, List, ListItem, ListItemText, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Backdrop, CircularProgress } from '@material-ui/core';
import { LobbyScreenProps, Room } from '../../Lobby';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    padding: 12,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    width: '100%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
    paddingBottom: 12
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginRight: 12
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

export const RoomList = (props: LobbyScreenProps) => {

  const classes = useStyles();
  const [newRoomNumPlayers, setNewRoomNumPlayers] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onNewRoomNameChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setNewRoomNumPlayers(e.target.value as string);
  }

  const renderCurrentRooms = () => {
    const onClickRoom = async (room: Room) => {
      const playerID = numPlayersInRoom(room);
      setIsLoading(true);
      await props.handleJoinRoom(room.gameName, room.gameID, `${playerID}`);
      setIsLoading(false);
    }
    const numPlayersInRoom = (room: Room) => {
      return room.players.filter((p) => p.name).length;
    }
    return (
      <List className={classes.container}>
        {props.rooms.map((room) => {
          return (
            <ListItem key={room.gameID} button onClick={(() => onClickRoom(room))}>
              <ListItemText primary={`${room.gameName}: ${room.gameID}`} secondary={`${numPlayersInRoom(room)}/${room.players.length}`} />
            </ListItem>
          )
        })}
      </List>
    )
  }

  const onNewRoomSubmit = async () => {
    setIsLoading(true);
    props.handleCreateRoom(game.name, parseInt(newRoomNumPlayers));
    setIsLoading(false);
  }

  const game = props.gameComponents[0].game; // first game for now because we are only doing TFM
  const getValidPlayerCounts = () => {
    const validPlayerCounts = [];
    for (let i = game.minPlayers; i < game.maxPlayers + 1; ++i) {
      validPlayerCounts.push(i);
    }
    return validPlayerCounts;
  }

  return (
    <Box className={classes.root}>
      {/* Loader is active when creating or joining a room */}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* List of rooms */}
      <Typography variant='h4' gutterBottom>
        Lobby
        </Typography>
      <Typography variant='h6' gutterBottom>
        Join a room
        </Typography>
      {renderCurrentRooms()}
      <Typography variant='h6' gutterBottom>
        Make your own room
        </Typography>
      {/* New room submission */}
      <Box className={classes.container}>
        <form className={classes.form} noValidate autoComplete="off">
          <FormControl variant="outlined" className={classes.input}>
            <InputLabel>Count</InputLabel>
            <Select onChange={onNewRoomNameChange} value={newRoomNumPlayers}>
              {getValidPlayerCounts().map((count) => (
                <MenuItem value={count}>{`${count}`}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Set the number of players</FormHelperText>
          </FormControl>
          <Button
            variant='contained'
            color='primary'
            disabled={newRoomNumPlayers === ''}
            onClick={onNewRoomSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}