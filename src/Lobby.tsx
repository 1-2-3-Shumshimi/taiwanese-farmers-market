import React from 'react';
import { Lobby } from 'boardgame.io/react';
import { TFM } from './Game';
import { Board } from './Board';

export const LobbyConfig = () => <Lobby
    gameServer = {`https://${window.location.hostname}:8000`}
    lobbyServer = {`https://${window.location.hostname}:8000`}
    gameComponents = {[TFM, Board]}
/>;
