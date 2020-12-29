import { Server } from 'boardgame.io/server';
import { TFM } from './Game';

const server = Server({
  games: [TFM]
});

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log('Running Lobby API on port 8080...'),
};

server.run({ port: 8000, lobbyConfig }, () => console.log('Running server!'));