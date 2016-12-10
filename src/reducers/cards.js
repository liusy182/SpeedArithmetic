'use strict'

import {
  CREATE_DECK,
  REMOVE_TOP
} from '../actions/card';

const DefaultState = {
  cards: [],
  result: 0,
  lastRemovedCard: null
}

const cards = (state = DefaultState, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        cards: action.cards,
        result: action.result
      };
    case REMOVE_TOP:
      return {
        ...state,
        cards: state.cards.slice(0, state.cards.length - 1),
        lastRemovedCard: state.cards[state.cards.length - 1]
      };
    default:
      return state
  }
}

export default cards