import { Ingredient } from "./Ingredient";

export interface Dish {
  name: string,
  chineseName: string,
  imagePath: string,
  isBasic: boolean,
  ingredients: Ingredient[],
  reputationPoints?: number,
  price: number
}
