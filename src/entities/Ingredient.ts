export interface Ingredient {
  name: string,
  chineseName: string,
  imagePath: string,
  numberInDeck: number,
  startingCount: number,
  currentCount: number,
  types: IngredientType[],
  doesSpoil: boolean,
  effect?: () => any
}

export enum IngredientType {
  MEAT, VEGETABLE, STARCH, CONDIMENT, SPICE
}

export interface WildCardIngredient {
  types: IngredientType[]
}

