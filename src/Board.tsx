import React from 'react';
import { BoardProps } from 'boardgame.io';
import { Game } from './Game';

export const Board = (props: BoardProps<Game>) => {

  console.log('Board props', props);

  switch (props.ctx.phase) {
    case 'intro': {
      return <div>We are in the intro phase</div>
    }
    case 'bid': {
      return <div>Let us bid!</div>
    }
    case 'action': {
      return <div>Lights camera action</div> 
    }
    default: {
      return <div>Phase unknown</div>
    }
  }
};