import { BoardProps } from "boardgame.io";

/**
 * Removes the specified number of cards from the beginning of the input array. Mutates the input array.
 * @param arr Deck that is being drawn from
 * @param numCards Number of cards to draw; default is 1
 */
const drawCards = (arr: any[], numCards = 1) => {
  const cardsDrawn = [];
  for (let i = 0; i < numCards; ++i) {
    cardsDrawn.push(arr.shift());
  }
  return cardsDrawn;
}

/**
 * Wraps playerID retrieval and logs incorrect type (e.g. null)
 */
const getPlayerID = (props: BoardProps<any>) => {
  if (props.playerID) {
    return props.playerID;
  }
  console.error("playerID should not be null", props.playerID);
  return '0';
}

export { drawCards, getPlayerID }