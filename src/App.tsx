import { Client } from 'boardgame.io/react';
import { TFM } from './Game';
import { Board } from './Board';

const App = Client({
  game: TFM,
  board: Board,
  // TODO: pass via lobby
  numPlayers: 4
});

export default App;