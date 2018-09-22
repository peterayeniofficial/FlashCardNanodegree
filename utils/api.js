import React from 'react'
import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'decks:flashcards'


const allDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'question 1',
        answer: 'answer 1',
      },
      {
        question: 'question 2',
        answer: 'answer 2',
      },
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
  HTML: {
    title: 'HTML',
    questions: [
      {
        question: 'What is a doctype?',
        answer: 'Elit placeat itaque iste harum esse, quasi ipsum non Fugit repellat accusamus debitis similique tempora! Odio dolor enim tempora aspernatur consectetur? Unde ab dicta iure dolor omnis praesentium Debitis aspernatur!',
      },
    ],
  },
  CSS: {
    title: 'CSS',
    questions: [
      {
        question: 'What is Flexbox?',
        answer: 'An elegant layout method for a more civilized age.',
      },
    ],
  },
  Firebase: {
    title: 'Firebase',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'Firebase is a Backend-as-a-Service — BaaS — grew up into a next-generation app-development platform on Google Cloud Platform.',
      },
    ],
  },
  JSON: {
    title: 'JSON',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML.',
      },
    ],
  },
  Vim: {
    title: 'Vim',
    questions: [
      {
        question: 'What is a Vim?',
        answer: 'Vim is just a text editor. That’s it.',
      },
    ],
  },
  reactNative: {
    title: 'reactNative',
    questions: [
      {
        question: 'What is a react-native?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.',
      },
      {
        question: 'Can you use Androis and IOS?',
        answer: 'yes',
      },
    ],
  },
}

export function initialData() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(allDecks))
  return allDecks
}
export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(results => (results === null
      ? initialData()
      : JSON.parse(results)))
}
