import { Ingredient, IngredientType } from "../entities/Ingredient";

export const IngredientData: { [name: string]: Ingredient } = {
  asian_eggplant: {
    name: 'Asian Eggplant',
    chineseName: '茄子',
    imagePath: '',
    numberInDeck: 1,
    startingCount: 4,
    currentCount: 4,
    types: [IngredientType.VEGETABLE],
    doesSpoil: true
  },
  bamboo_shoots: {
    name: 'Bamboo Shoots',
    chineseName: '竹筍',
    imagePath: '',
    numberInDeck: 2,
    startingCount: 4,
    currentCount: 4,
    types: [IngredientType.VEGETABLE],
    doesSpoil: true
  },
  beef: {
    name: 'Beef',
    chineseName: '牛肉',
    imagePath: '',
    numberInDeck: 1,
    startingCount: 3,
    currentCount: 3,
    types: [IngredientType.MEAT],
    doesSpoil: true
  },
  black_tea_leaves: {
    name: 'Black Tea Leaves',
    chineseName: '茶葉',
    imagePath: '',
    numberInDeck: 1,
    startingCount: 3,
    currentCount: 3,
    types: [IngredientType.SPICE],
    doesSpoil: false
  },
  bok_choy: {
    name: 'Bok Choy',
    chineseName: '白菜',
    imagePath: '',
    numberInDeck: 2,
    startingCount: 3,
    currentCount: 3,
    types: [IngredientType.VEGETABLE],
    doesSpoil: true
  },
  chicken: {
    name: 'Chicken',
    chineseName: '雞肉',
    imagePath: '',
    numberInDeck: 2,
    startingCount: 4,
    currentCount: 4,
    types: [IngredientType.MEAT],
    doesSpoil: true
  },
  chili_bean_sauce: {
    name: 'Chili Bean Sauce',
    chineseName: '辣豆瓣醬',
    imagePath: '',
    numberInDeck: 2,
    startingCount: 3,
    currentCount: 3,
    types: [IngredientType.CONDIMENT],
    doesSpoil: false
  },
  cilantro: {
    name: 'Cilantro',
    chineseName: '胡荽葉',
    imagePath: '',
    numberInDeck: 2,
    startingCount: 5,
    currentCount: 5,
    types: [IngredientType.SPICE],
    doesSpoil: true
  },
  clams: {
    name: 'Clams',
    chineseName: '蛤蜊',
    imagePath: '',
    numberInDeck: 1,
    startingCount: 4,
    currentCount: 4,
    types: [IngredientType.MEAT],
    doesSpoil: true
  }
}