'use strict'

export const CREATE_DECK = 'CREATE_DECK'

export function createDeck(max, numOfCards) {
  return dispatch => {
    let cards = [];
    let sum = 0;
    for(let ii = 0; ii < numOfCards; ii++) {
      let num = Math.ceil(Math.random() * max);
      sum += num;
      cards.push({
        number: num
      });
    }
    dispatch({
      type: CREATE_DECK,
      cards: cards,
      result: sum
    });
  };
}

export const REMOVE_TOP = 'REMOVE_TOP'

export function removeTop(max, numOfCards) {
  return dispatch => {
    dispatch({
      type: REMOVE_TOP
    });
  };
}
