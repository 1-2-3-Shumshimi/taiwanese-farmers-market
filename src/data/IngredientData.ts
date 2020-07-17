import { Ingredient, IngredientType } from "../entities/Ingredient";

export const IngredientData: { [name: string]: Ingredient } = {
  'Asian Eggplant': {
    name: 'Asian Eggplant',
    chineseName: '茄子',
    imagePath: '',
    numberInDeck: 1,
    startingCount: 4,
    currentCount: 4,
    types: [IngredientType.VEGETABLE],
    doesSpoil: true
  }
}