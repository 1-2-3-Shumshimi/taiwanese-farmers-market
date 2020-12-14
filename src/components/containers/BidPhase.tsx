import React from 'react';
import { BoardProps } from 'boardgame.io';
import { Game } from '../../Game';
import { Ingredient } from '../../entities/Ingredient';
import { IngredientCard } from '../cards/IngredientCard';
import { Chef } from '../../entities/Chef';
import { ChefCard } from '../cards/ChefCard';

export const BidPhase = (props: BoardProps<Game>) => {

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
        <ChefCard data={chef} />
      )
    });
  }

  return <div />
};