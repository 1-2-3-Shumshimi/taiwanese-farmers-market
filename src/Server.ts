import React from 'react';
import { Server, FlatFile } from 'boardgame.io/server';
import { TFM } from "./Game";
// import { LobbyConfig } from './Lobby'
// import Router from 'koa-router';
// import { SERVER_PORT } from "./utils/Constants"

// const router = new Router();

const server = Server({
    games: [TFM],
    db: new FlatFile({
        dir: '/storage/directory',
        logging: true,
    }),
});

// server.run({ port: SERVER_PORT, LobbyConfig, () => console.log("server running") });
server.run(8000, () => console.log("Server running"));
