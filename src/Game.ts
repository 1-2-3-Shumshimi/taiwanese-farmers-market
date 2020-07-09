import { INVALID_MOVE } from 'boardgame.io/core';
import { selectBasicChef, voteStartingPlayer } from './moves/Intro';
import { bidIngredient, discardIngredient } from './moves/Bid';
import {
  hireChefHidden, hireChefOpen, fireChef, revealChef,
  getLoan, requestTrade, activateAbility, makeDish,
  acceptTrade, rejectTrade, getIngredientFromDiscard, setIngredientForSubstitute
} from './moves/Action';

export interface Game {
  players: Player[]
}

export interface Player {
  money: number,
  ingredients: Ingredient[],
  chefs: Chef[],
  alreadyMadeDishes: Dish[]
}

export interface Ingredient {
  name: string,
  chineseName: string,
  imagePath: string,
  numberInDeck: number,
  startingCount: number,
  currentCount: number,
  types: IngredientType[],
  doesSpoil: boolean,
  effect: () => any // how is this going to work...
}

export interface Chef {
  name: string,
  chineseName: string,
  isBasic: boolean,
  dishOne: Dish,
  dishTwo?: Dish,
  ability: Ability,
  wage: number
}

export interface Dish {
  name: string,
  chineseName: string,
  imagePath: string,
  isBasic: boolean,
  ingredients: Ingredient[],
  reputationPoints?: number,
  price: number
}

export interface Ability {
  name: string,
  imagePath: string,
  cost: number,
  effect: () => any // how is this going to work?
}

export enum IngredientType {
  MEAT, VEGETABLE, STARCH, SAUCE, SPICE
}

export const TFM = {

  name: 'Taiwanese-Farmers-Market',
  minPlayers: 2,
  maxPlayers: 5,

  // TODO: set up initial state
  // TODO: create a model for the game state
  setup: () => ({}),

  phases: {
    intro: {
      moves: { selectBasicChef, voteStartingPlayer },
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