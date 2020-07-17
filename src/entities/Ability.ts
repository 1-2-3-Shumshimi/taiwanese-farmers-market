export interface Ability {
  name: string,
  imagePath: string,
  description: string,
  cost: number,
  effect: () => any // how is this going to work?
}
