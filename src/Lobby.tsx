import React from 'react';
import { Login } from './components/lobby/Login';

export interface LobbyScreenProps {
  errorMsg: string;
  gameComponents: { game: any, board: any }[];
  rooms: any[];
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

  switch (props.phase) {
    case 'enter': {
      return <Login {...props} />
    }
    case 'list': {
      return <div>list</div>
    }
    case 'play': {
      return <div>play</div>
    }
  }
}