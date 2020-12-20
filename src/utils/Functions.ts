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

export { drawCards }