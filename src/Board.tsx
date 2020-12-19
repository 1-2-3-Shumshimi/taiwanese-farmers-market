import React from 'react';
import { BoardProps } from 'boardgame.io';
import { Game } from './Game';
import { IntroPhase } from './components/containers/IntroPhase';

export const Board = (props: BoardProps<Game>) => {

  console.log('Board props', props);

  switch (props.ctx.phase) {
    case 'intro': {
      return <IntroPhase {...props} />
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