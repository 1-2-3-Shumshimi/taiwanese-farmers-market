import React from 'react';
import { Login } from './components/lobby/Login';
import { RoomList } from './components/lobby/RoomList';
import { RoomWaiting } from './components/lobby/RoomWaiting';

export interface Room {
  gameID: string,
  gameName: string,
  players: {
    id: number,
    name: string
  }[]
}

export interface LobbyScreenProps {
  errorMsg: string;
  gameComponents: { game: any, board: any }[];
  rooms: Room[];
  phase: 'enter' | 'play' | 'list';
  playerName: string;
  runningGame: any | null;
  handleEnterLobby: (playerName: string) => void;
  handleExitLobby: () => void;
  handleCreateRoom: (gameName: string, numPlayers: number) => void;
  handleJoinRoom: (gameName: string, gameID: string, playerID: string) => void;
  handleLeaveRoom: (gameName: string, gameID: string) => void;
  handleExitRoom: () => void;
  handleRefreshRooms: () => void;
  handleStartGame: (gameName: string, gameOpts: object) => void
}

export const LobbyScreen = (props: LobbyScreenProps) => {

  const getPlayerRoom = () => {
    return props.rooms.find(r => r.players.find(p => p.name === props.playerName));
  }

  console.log(props);

  switch (props.phase) {
    case 'enter': {
      return <Login {...props} />
    }
    case 'list': {
      const playerRoom = getPlayerRoom();
      if (playerRoom) {
        return <RoomWaiting {...props} gameID={playerRoom.gameID} />
      }
      return <RoomList {...props} />
    }
    case 'play': {
      const game = props.runningGame;
      if (game) {
        return (<props.runningGame.app
          gameID={game.gameID}
          playerID={game.playerID}
          credentials={game.credentials}
        />)
      } else {
        return (<div>Can't find your game!</div>)
      }
    }
  }
}