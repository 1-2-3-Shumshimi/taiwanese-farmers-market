import { Ability } from "../entities/Ability";

export const AbilityData: { [name: string]: Ability } = {
  exp_cooking_meat: {
    name: 'Experimental Cooking - Meat',
    imagePath: '',
    description: 'Substitute one Meat ingredient with another Meat ingredient for one dish that you create this turn. Discard the substitute ingredient immediately after creating the dish.',
    cost: 150,
    effect: () => console.log('Called Experimental Cooking - Meat')
  },
  exp_cooking_vegetable: {
    name: 'Experimental Cooking - Vegetable',
    imagePath: '',
    description: 'Substitute one Vegetable ingredient with another Vegetable ingredient for one dish that you create this turn. Discard the substitute ingredient immediately after creating the dish.',
    cost: 150,
    effect: () => console.log('Called Experimental Cooking - Vegetable')
  },
  exp_cooking_condiment: {
    name: 'Experimental Cooking - Condiment',
    imagePath: '',
    description: 'Substitute one Condiment ingredient with another Condiment ingredient for one dish that you create this turn. Discard the substitute ingredient immediately after creating the dish.',
    cost: 150,
    effect: () => console.log('Called Experimental Cooking - Condiment')
  },
  exp_cooking_spice: {
    name: 'Experimental Cooking - Spice',
    imagePath: '',
    description: 'Substitute one Spice ingredient with another Spice ingredient for one dish that you create this turn. Discard the substitute ingredient immediately after creating the dish.',
    cost: 150,
    effect: () => console.log('Called Experimental Cooking - Spice')
  },
  backup_meat: {
    name: 'Backup Inventory - Meat',
    imagePath: '',
    description: 'Find any one Meat ingredient from the discard pile and add it to your pantry. Decrease that Ingredient\'s Count by two.',
    cost: 150,
    effect: () => console.log('Called Backup Inventory - Meat')
  },
  backup_vegetable: {
    name: 'Backup Inventory - Vegetable',
    imagePath: '',
    description: 'Find any one Vegetable ingredient from the discard pile and add it to your pantry. Decrease that Ingredient\'s Count by two.',
    cost: 150,
    effect: () => console.log('Called Backup Inventory - Vegetable')
  },
  backup_condiment: {
    name: 'Backup Inventory - Condiment',
    imagePath: '',
    description: 'Find any one Condiment ingredient from the discard pile and add it to your pantry. Decrease that Ingredient\'s Count by two.',
    cost: 150,
    effect: () => console.log('Called Backup Inventory - Condiment')
  },
  backup_spice: {
    name: 'Backup Inventory - Spice',
    imagePath: '',
    description: 'Find any one Spice ingredient from the discard pile and add it to your pantry. Decrease that Ingredient\'s Count by two.',
    cost: 150,
    effect: () => console.log('Called Backup Inventory - Spice')
  }
}