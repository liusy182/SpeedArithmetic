'use strict';

export const CREATE_DECK = 'CREATE_DECK'

export function createDeck(max, numOfCards) {
  return dispatch => {
    let cards = [];
    let sum = 0;
    for(let ii = 0; ii < numOfCards; ii++) {
      let num = Math.ceil(Math.random() * max);
      sum += num;
      cards.push({
        id: ii,
        number: num
      });
    }
    return Promise.resolve(dispatch({
      type: CREATE_DECK,
      cards: cards,
      result: sum
    }));
  };
}