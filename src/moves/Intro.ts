import { Ctx } from "boardgame.io";
import { Game } from "../Game";

export const selectBasicChef = (G: Game, ctx: Ctx, chefName: string) => {
  console.log('G', G);
  console.log('ctx', ctx);
  // G.players[ctx.currentPlayer].chefs.push(G.); // Don't push from chef deck... players select from chefs presented to them
  // console.log(`Player ${G.players[ctx.currentPlayer].name} selected chef ${G.chefDeck[id].name}`);
};
