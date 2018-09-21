export const DECKS_KEY = 'decks:flashcards'
export function initData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(allDecks))
  return allDecks
}
