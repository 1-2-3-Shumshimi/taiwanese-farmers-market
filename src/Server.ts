import { Server } from 'boardgame.io/server';
import { TFM } from './Game';

const server = Server({ games: [TFM] });

server.run(8000, () => console.log('Running server!'));