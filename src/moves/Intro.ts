import { Ctx } from "boardgame.io";

export const selectBasicChef = (G: any, ctx: Ctx, id: number) => {
  console.log('G', G);
  console.log('ctx', ctx);
  console.log('id', id);
  G.players[ctx.currentPlayer].chefs.push(id)
  console.log('Player ',G.players[ctx.currentPlayer].name,' selected chef '
  ,G.chefDeck[id].name)
};
