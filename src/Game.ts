import { INVALID_MOVE } from 'boardgame.io/core';
import { selectBasicChef } from './moves/Intro';
import { bidIngredient, discardIngredient } from './moves/Bid';
import {
  hireChefHidden, hireChefOpen, fireChef, revealChef,
  getLoan, requestTrade, activateAbility, makeDish,
  acceptTrade, rejectTrade, getIngredientFromDiscard, setIngredientForSubstitute
} from './moves/Action';
import { Player } from './entities/Player';
import { Ingredient } from './entities/Ingredient';
import { Chef } from './entities/Chef';

export interface Game {
  players: Player[],
  actionPhaseStartingPlayer: number,
  chefsForHire: Chef[],
  chefDeck: Chef[],
  ingredientsToBid: Ingredient[],
  ingredientsDeck: Ingredient[],
  ingredientDiscard: Ingredient[]
}

export const TFM = {
  name: 'Taiwanese-Farmers-Market',
  minPlayers: 2,
  maxPlayers: 5,

  // TODO: set up initial state
  // TODO: create a model for the game state
  setup: (numPlayers: number) => initGameState(numPlayers),

  phases: {
    intro: {
      moves: { selectBasicChef },
      start: true,
      // endIf: 
      next: 'bid'
    },
    bid: {
      moves: { bidIngredient, discardIngredient },
      // onBegin: (G, ctx) => { ... },
      // onEnd: (G, ctx) => { ... },
      next: 'action'
    },
    action: {
      moves: {},
      next: 'bid',
      turn: {
        stages: {
          manageChefs: {
            moves: { hireChefHidden, hireChefOpen, fireChef, revealChef },
            next: 'payChefs'
          },
          payChefs: {
            moves: { getLoan },
            next: 'doActions'
          },
          doActions: {
            moves: { requestTrade, activateAbility, makeDish },
            next: 'spoilIngredients'
          },
          spoilIngredients: {
            moves: {} // maybe this doesn't need to be its own stage... could just be cleanup
          },
          respondTrade: {
            moves: { acceptTrade, rejectTrade }
          },
          getIngredientFromDiscard: {
            moves: { getIngredientFromDiscard }
          },
          setIngredientForSubstitute: {
            moves: { setIngredientForSubstitute }
          }
        }
      }
    }
  }
}

const initGameState = (numPlayers: number) => {

}

const initPlayers = (id: string) => {

}