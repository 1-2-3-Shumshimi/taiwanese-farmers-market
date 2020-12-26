import { Client } from 'boardgame.io/react';
import { TFM } from './Game';
import { Board } from './Board';
import { SocketIO } from 'boardgame.io/multiplayer';

const App = Client({
  game: TFM,
  board: Board,
  numPlayers: 4,
  multiplayer: SocketIO({ server: 'localhost:8000' })
});

export default App;