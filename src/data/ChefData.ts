import { Chef } from "../entities/Chef";
import { DishData } from "./DishData";
import { AbilityData } from "./AbilityData";

export const ChefData: { [name: string]: Chef } = {
  'Chef Chou': {
    name: 'Chef Chou',
    chineseName: '周',
    dishOne: DishData['Railway Mealbox'],
    isBasic: true,
    ability: AbilityData['Experimental Cooking - Vegetable'],
    wage: 0
  }
};
