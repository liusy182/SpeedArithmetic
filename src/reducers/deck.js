'use strict';

import {
  CREATE_DECK,
  REUSE_DECK,
  REMOVE_TOP
} from '../actions/deck';

const DefaultState = {
  cards: [],
  remainingSize: 0,
  result: 0,
  lastRemovedCard: null
}

const deck = (state = DefaultState, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        cards: action.cards,
        remainingSize: action.cards.length,
        result: action.result,
        lastRemovedCard: null
      };
    case REUSE_DECK:
      return {
        ...state,
        remainingSize: state.cards.length,
        lastRemovedCard: null
      };
    case REMOVE_TOP:
      return {
        ...state,
        remainingSize: state.remainingSize - 1,
        lastRemovedCard: state.cards[state.remainingSize - 1]
      };
    default:
      return state
  }
}

export default deck