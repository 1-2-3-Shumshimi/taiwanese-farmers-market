import React from 'react';
import { Server } from 'boardgame.io/server';
import { TFM } from "./Game";
import { SERVER_PORT } from "./utils/Constants"

const server = Server({
    games: [TFM],
});

server.run(SERVER_PORT);
