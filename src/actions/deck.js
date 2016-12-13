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

export const REUSE_DECK = 'REUSE_DECK'

export function reuseDeck() {
  return (dispatch, getState) => {
    if(getState().deck.cards.length == 0) Promise.resolve();

    return Promise.resolve(dispatch({
      type: REUSE_DECK
    }));
  };
}

export const REMOVE_TOP = 'REMOVE_TOP'

export function removeTopCard() {
  return dispatch => Promise.resolve(
    dispatch({
      type: REMOVE_TOP
    })
  );
}
