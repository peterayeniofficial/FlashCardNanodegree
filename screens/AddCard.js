import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
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
	  const { question, answer } = this.state
	  if (question === '' || answer === '') {
	    alert('You need to have a question and answer')
	  } else {
	    const { dispatch, navigation } = this.props
	    // console.log(navigation.getParam('title'))
	    dispatch(addCard({
	      title: navigation.getParam('title'),
	      question,
	      answer,
	    }))
	    navigation.navigate('HomeStack')
	  }
	}

	render() {
	  const { question, answer } = this.state
	  // console.log(question, answer, this.props)
	  return (
  <KeyboardAvoidingView
    behavior="padding"
    enabled
    style={styles.containerForm}
  >
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
  </KeyboardAvoidingView>
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
