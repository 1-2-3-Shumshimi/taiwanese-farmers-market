export interface Ability {
  name: string,
  imagePath: string,
  cost: number,
  effect: () => any // how is this going to work?
}
