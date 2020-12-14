import React from 'react';
import { BoardProps } from 'boardgame.io';
import { Button } from '@material-ui/core'
import { Game } from './Game';
import { Ingredient } from './entities/Ingredient';
import { IngredientCard } from './components/IngredientCard';
import { Chef } from './entities/Chef';

export const Board = (props: BoardProps<Game>) => {

  console.log('Board props', props);

  const renderIngredientsToBid = () => {
    return props.G.ingredientsToBid.forEach((ingredient: Ingredient) => {
      return (
        <IngredientCard data={ingredient} />
      )
    });
  }

  const renderChefsForHire = () => {
    return props.G.chefsForHire.forEach((chef: Chef) => {
      return (
        <ChefCard />
      )
    });
  }

  return (
    <div>
      <p>Jonathan was here</p>
      <Button color='primary' onClick={() => { props.moves.selectBasicChef() }}>Bid</Button>
      {renderIngredientsToBid()}
    </div>
  );
};