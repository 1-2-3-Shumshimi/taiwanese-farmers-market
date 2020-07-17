import { Dish } from "../entities/Dish";
import { IngredientData } from "./IngredientData";
import { IngredientType } from "../entities/Ingredient";

export const DishData: { [name: string]: Dish } = {
  'Railway Mealbox': {
    name: 'Railway Mealbox',
    chineseName: '台鐵便當',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT]},
      { types: [IngredientType.STARCH]},
      { types: [IngredientType.VEGETABLE]}
    ],
    price: 0
  }
}