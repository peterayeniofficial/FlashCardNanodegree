import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native'
import { tintColor, lightPurp, purple, white } from '../constants/Colors'
import { addCard } from '../actions'
import { connect } from 'react-redux'

class AddCard extends Component {
	state = {
	  question: '',
	  answer: '',
	}

	submit = () => {
	  const { dispatch, navigation } = this.props
	  const { question, answer } = this.state
	  dispatch(addCard({
	    title: navigation.getParam('title'),
	    question,
	    answer,
	  }))
	  navigation.goBack()
	}

	render() {
	  const { question, answer } = this.state
	  console.log(question, answer, this.props)
	  return (
  <View style={styles.containerForm}>
    <TextInput
      onChangeText={question => this.setState({ question })}
      placeholder="Question..."
      style={styles.inputCard}
      value={question}
    />
    <TextInput
      onChangeText={answer => this.setState({ answer })}
      placeholder="Answer..."
      style={styles.inputCard}
      value={answer}
    />
    <Button
      color={lightPurp}
      onPress={this.submit}
      title="Add card"
    />
  </View>
	  )
	}
}
const styles = StyleSheet.create({
  // tintColor, lightPurp, purple, white
  containerForm: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  inputCard: {
    flex: 0,
    alignSelf: 'center',
    color: lightPurp,
    marginTop: 24,
    marginBottom: 24,
    fontSize: 22,
    height: 45,
  },
})
export default withNavigation(connect()(AddCard))
