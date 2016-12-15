'use strict';

import {
  CREATE_DECK
} from '../actions/deck';

const DefaultState = {
  cards: [],
  result: 0
}

const deck = (state = DefaultState, action) => {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        cards: action.cards,
        result: action.result
      };
    default:
      return state
  }
}

export default deck