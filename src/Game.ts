import { ActivePlayers } from 'boardgame.io/core';
import _ from 'lodash';
import { selectBasicChef } from './moves/Intro';
import { bidIngredient, discardIngredient } from './moves/Bid';
import {
  hireChefHidden, hireChefOpen, fireChef, revealChef,
  getLoan, requestTrade, activateAbility, makeDish,
  acceptTrade, rejectTrade, getIngredientFromDiscard, setIngredientForSubstitute
} from './moves/Action';
import { Player } from './entities/Player';
import { BasicChefData, ChefData } from './data/ChefData';
import { IngredientData } from './data/IngredientData'
import { Ingredient } from './entities/Ingredient';
import { Chef } from './entities/Chef';
import { Ctx } from 'boardgame.io';
import { drawCards } from './utils/Functions';

export interface Game {
  players: { [id: string]: Player },
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

  setup: (ctx: Ctx) => initGameState(ctx),

  phases: {
    intro: {
      moves: { selectBasicChef },
      turn: {
        activePlayers: ActivePlayers.ALL_ONCE,
      },
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

const initGameState = (ctx: Ctx): Game => {
  console.log('calling initGameState');
  return {
    players: initPlayers(ctx),
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
const initPlayers = (ctx: Ctx): { [id: string]: Player } => {
  const basicChefDeck = initBasicChefDeck();
  const players: { [id: string]: Player } = {}
  for (let i = 0; i < ctx.numPlayers; ++i) {
    players[`${i}`] = {
      id: i,
      money: 0,
      reputationPoints: 0,
      ingredients: [],
      chefs: [],
      basicChefOptions: drawCards(basicChefDeck, 2),
      alreadyMadeDishes: []
    };
  }
  return players;
}

const initChefDeck = () => {
  return _.shuffle(_.clone(Object.values(ChefData)));
};

const initBasicChefDeck = () => {
  return _.shuffle(_.clone(Object.values(BasicChefData)));
};

const initIngredientDeck = () => {
  const ingredientDeck: Ingredient[] = [];
  Object.values(IngredientData).forEach((ingredient) => {
    for (let i = 0; i < ingredient.numberInDeck; ++i) {
      ingredientDeck.push(_.clone(ingredient));
    }
  });
  return _.shuffle(ingredientDeck);
};