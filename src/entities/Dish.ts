import { Ingredient, WildCardIngredient } from "./Ingredient";

export interface Dish {
  name: string,
  chineseName: string,
  isBasic: boolean,
  ingredients: (Ingredient | WildCardIngredient)[],
  reputationPoints?: number,
  price: number
}
