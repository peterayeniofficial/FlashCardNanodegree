import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'

class Quiz extends Component {
   static navigationOptions = ({ navigation }) => ({
     title: `Deck: ${navigation.state.params.title}`,
   });
  state = {
    count: 0,
  }
  render() {
    console.log(this.props)
    const { navigation } = this.props
    const {
      questions, title, numberCard, randColor,
    } = navigation.state.params
    console.log(questions, title, numberCard, randColor)
    return (
      <View>
        <ScrollView>
          <View style={styles.testContainer}>
            <Text style={styles.childQuestion}>
              xav
            </Text>
            <Text style={styles.childAnswer}>
              artot
            </Text>
          </View>
          {questions.map((item, id) => (
            <View key={id} style={styles.card}>
              <Text style={styles.question}>
                { item.question }
              </Text>
              <Text style={styles.answer}>
                { item.answer }
              </Text>
            </View>
           ))}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  testContainer: {
  },
  childAnswer: {
    flex: 1,
    width: null,
    height: null,
  },
  childQuestion: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity: 0.3,
  },
  card: {
    // flex: 1,
    // overflow: 'hidden',
    // top: 100,
    // left: 100,
    // right: 100,
    // bottom: 100,
    // position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  question: {
  },
  answer: {

  },
})
export default Quiz
