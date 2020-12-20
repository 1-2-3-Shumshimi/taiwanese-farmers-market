import { Chef } from "../entities/Chef";
import { DishData } from "./DishData";
import { AbilityData } from "./AbilityData";

export const BasicChefData: { [name: string]: Chef } = {
  chou: {
    id: 0,
    name: 'Chef Chou',
    chineseName: '周',
    dishOne: DishData.railway_mealbox,
    isBasic: true,
    ability: AbilityData.exp_cooking_vegetable,
    wage: 0,
    imagePath: 'chef/chou.png'
  },
  hsiao: {
    id: 1,
    name: 'Chef Hsiao',
    chineseName: '蕭',
    dishOne: DishData.shabu_shabu,
    isBasic: true,
    ability: AbilityData.backup_condiment,
    wage: 0,
    imagePath: 'chef/hsiao.png'
  },
  hung: {
    id: 2,
    name: 'Chef Hung',
    chineseName: '洪',
    dishOne: DishData.meat_dumpling_soup,
    isBasic: true,
    ability: AbilityData.backup_meat,
    wage: 0,
    imagePath: 'chef/hung.png'
  },
  lai: {
    id: 3,
    name: 'Chef Lai',
    chineseName: '賴',
    dishOne: DishData.steamed_rice_bowl_cake,
    isBasic: true,
    ability: AbilityData.exp_cooking_condiment,
    wage: 0,
    imagePath: 'chef/lai.png'
  },
  liang: {
    id: 4,
    name: 'Chef Liang',
    chineseName: '梁',
    dishOne: DishData.hakka_style_stir_fry,
    isBasic: true,
    ability: AbilityData.exp_cooking_meat,
    wage: 0,
    imagePath: 'chef/liang.png'
  }
};

export const ChefData: { [name: string]: Chef } = {}
