import { Ingredient } from "./Ingredient";
import { Chef } from "./Chef";
import { Dish } from "./Dish";

export interface Player {
  id: number,
  name: string,
  money: number,
  reputationPoints: number,
  ingredients: Ingredient[],
  chefs: Chef[],
  alreadyMadeDishes: Dish[]
}

