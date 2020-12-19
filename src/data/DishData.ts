import { Dish } from "../entities/Dish";
import { IngredientData } from "./IngredientData";
import { IngredientType } from "../entities/Ingredient";

export const DishData: { [name: string]: Dish } = {
  railway_mealbox: {
    name: 'Railway Mealbox',
    chineseName: '台鐵便當',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT] },
      { types: [IngredientType.STARCH] },
      { types: [IngredientType.VEGETABLE] }
    ],
    price: 0
  },
  shabu_shabu: {
    name: 'Shabu Shabu',
    chineseName: '涮涮鍋',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT] },
      { types: [IngredientType.VEGETABLE] },
      { types: [IngredientType.CONDIMENT] }
    ],
    price: 0
  },
  meat_dumpling_soup: {
    name: 'Meat Dumpling Soup',
    chineseName: '肉羹',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT] },
      { types: [IngredientType.SPICE] },
      { types: [IngredientType.CONDIMENT] }
    ],
    price: 0
  },
  steamed_rice_bowl_cake: {
    name: 'Steamed Rice Bowl Cake',
    chineseName: '碗粿',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT] },
      { types: [IngredientType.STARCH] },
      { types: [IngredientType.CONDIMENT] }
    ],
    price: 0
  },
  hakka_style_stir_fry: {
    name: 'Hakka-Style Stir Fry',
    chineseName: '客家小炒',
    imagePath: '',
    isBasic: true,
    ingredients: [
      { types: [IngredientType.MEAT] },
      { types: [IngredientType.VEGETABLE] },
      { types: [IngredientType.VEGETABLE] }
    ],
    price: 0
  }
}