import { Client, Lobby } from 'boardgame.io/react';
import { TFM } from './Game';
import { Board } from './Board';
import { SocketIO } from 'boardgame.io/multiplayer';
import React from 'react';
import { LobbyScreen, LobbyScreenProps } from './Lobby';

// const App = Client({
//   game: TFM,
//   board: Board,
//   numPlayers: 4,
//   multiplayer: SocketIO({ server: 'localhost:8000' })
// });

// Write custom lobby UI and take more control of the lobby APIs
// https://boardgame.io/documentation/#/api/Lobby - see the vanilla JS version
export const App = () => <Lobby
  gameServer={'http://localhost:8000'}
  lobbyServer={'http://localhost:8080'}
  gameComponents={[{ game: TFM, board: Board }]}
  renderer={(props: LobbyScreenProps) => <LobbyScreen {...props} />}
/>

export default App;