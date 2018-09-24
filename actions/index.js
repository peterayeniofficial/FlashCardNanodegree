export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'GET_DECKS'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck({ title }) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function addCard(parameters) {
  return {
    type: ADD_CARD,
    parameters,
  }
}
