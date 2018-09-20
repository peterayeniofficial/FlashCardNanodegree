import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import { NavigationActions, withNavigation } from 'react-navigation'
import { tintColor, lightPurp, purple, white } from '../constants/Colors'
import { getRandomColor } from '../utils/colors'

class Deck extends Component {
  render() {
    const { questions, title } = this.props
    const randColor = getRandomColor()
    const numberQuestions = questions.length
    const numberCard = numberQuestions && numberQuestions > 1
      ? `${numberQuestions} cards`
      : `${numberQuestions} card`
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckDetails',
      params: {
        questions, title, numberCard, randColor,
      },
    })
    // console.log(questions, title, numberCard, randColor)
    return (
      <View style={[styles.card, { backgroundColor: randColor }]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(navigateAction)}
          style={styles.center}
        >
          { title }
          <Text style={styles.textFace}>
            { title }
          </Text>
          <Text style={styles.textFaceLabel}>
            { numberCard }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    minHeight: 80,
    backgroundColor: purple,
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  textFace: {
    flex: 1,
    color: white,
    textAlign: 'center',
    fontSize: 25,
  },
  textFaceLabel: {
    flex: 1,
    color: white,
    textAlign: 'center',
    fontSize: 18,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
export default withNavigation(Deck)
