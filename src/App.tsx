import React from 'react';
import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
// import { SocketIO } from 'boardgame.io/multiplayer';
import { TFM } from './Game';
import { Board } from './Board';
import { TransportOpts } from 'boardgame.io/dist/types/src/client/transport/transport';

const TFMClient = Client({
  game: TFM,
  board: Board,
  debug: false,
  multiplayer: (opts: TransportOpts) => {
    return Local()({...opts, gameKey: TFM, game: TFM as any});
  },
  // multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const App = () => (
    <div>
        <TFMClient playerID="0" />
        <TFMClient playerID="1" />
        <TFMClient playerID="2" />
    </div>
);

export default App;
