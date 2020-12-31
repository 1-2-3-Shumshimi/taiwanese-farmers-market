import { Ingredient } from "./Ingredient";
import { Chef } from "./Chef";
import { Dish } from "./Dish";

export interface Player {
  id: number,
  money: number,
  reputationPoints: number,
  ingredients: Ingredient[],
  chefs: Chef[],
  basicChefOptions: Chef[],
  alreadyMadeDishes: Dish[]
}

