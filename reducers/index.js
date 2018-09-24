import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      console.log(action)
      return {
        ...state,
        [action.title]: { questions: [], title: action.title },
      }
    case ADD_CARD:
      // console.log(action)
      const { title, question, answer } = action.parameters
      // console.log(state[title].questions)
      const originalQuestions = state[title].questions
      const newQuestions = [
        ...originalQuestions,
        {
          question,
          answer,
        },
      ]
      return {
        ...state,
        [title]: { ...state[title], questions: newQuestions },
      }
    default:
      return state
  }
}

export default decks
