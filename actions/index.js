export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck({ name }) {
  return {
    type: ADD_DECK,
    name,
  }
}

export const addCard = parameters => ({
  type: ADD_CARD,
  parameters,
})
