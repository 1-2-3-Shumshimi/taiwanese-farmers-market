import { Ability } from "../entities/Ability";

export const AbilityData: { [name: string]: Ability } = {
  'Experimental Cooking - Vegetable': {
    name: 'Experimental Cooking - Vegetable',
    imagePath: '',
    description: 'Substitute one Vegetable ingredient with another Vegetable ingredient for one dish that you create this turn. Discard the substitute ingredient immediately after creating the dish.',
    cost: 150,
    effect: () => console.log('Called Experimental Cooking - Vegetable')
  }
}