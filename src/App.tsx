import React from 'react';
import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
// import { SocketIO } from 'boardgame.io/multiplayer';
import { TFM } from './Game';
import { Board } from './Board';

const TFMClient = Client({
  game: TFM,
  board: Board,
  multiplayer: Local(),
  // multiplayer: SocketIO({ server: 'localhost:3000' }),
});

const App = () => (
    <div>
        <TFMClient playerID="0" />
        <TFMClient playerID="1" />
    </div>
);

export default App;
