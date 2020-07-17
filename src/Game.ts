import { INVALID_MOVE } from 'boardgame.io/core';
import _ from 'lodash';
import { selectBasicChef } from './moves/Intro';
import { bidIngredient, discardIngredient } from './moves/Bid';
import {
  hireChefHidden, hireChefOpen, fireChef, revealChef,
  getLoan, requestTrade, activateAbility, makeDish,
  acceptTrade, rejectTrade, getIngredientFromDiscard, setIngredientForSubstitute
} from './moves/Action';
import { Player, PlayerInitData } from './entities/Player';
import { ChefData } from './data/ChefData';
import { IngredientData } from './data/IngredientData'
import { Ingredient } from './entities/Ingredient';
import { Chef } from './entities/Chef';
import { Ctx } from 'boardgame.io';

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
  setup: (ctx: Ctx) => initGameState(),

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

const initGameState = (): Game => {
  const pInitArr = [{ name: 'Eleanor' }, { name: 'Chidi' }, { name: 'Tahani' }, { name: 'Jason' }];
  return {
    players: pInitArr.map((p, i) => initPlayer(p, i)),
    actionPhaseStartingPlayer: 0,
    chefsForHire: [],
    chefDeck: initChefDeck(),
    ingredientsToBid: [],
    ingredientsDeck: initIngredientDeck(),
    ingredientDiscard: []
  }
}

/**
 * Returns a player object at initialization
 * TODO: Build this out with more player data from the lobby
 */
const initPlayer = (pInitData: PlayerInitData, index: number): Player => {
  return {
    id: index,
    name: pInitData.name,
    money: 0,
    reputationPoints: 0,
    ingredients: [],
    chefs: [],
    alreadyMadeDishes: []
  }
}

const initChefDeck = () => {
  return _.clone(Object.values(ChefData));
};

const initIngredientDeck = () => {
  return _.clone(Object.values(IngredientData));
};