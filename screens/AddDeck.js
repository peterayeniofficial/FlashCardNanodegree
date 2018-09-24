import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native'
import { tintColor, lightPurp, purple, white } from '../constants/Colors'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class AddDeck extends Component {
  // header navigation
   static navigationOptions = ({ navigation }) => ({
     title: 'Add Deck',
   });
	state = {
	  title: '',
	}

	submit = () => {
	  const { dispatch, navigation } = this.props
	  const { title } = this.state
	  console.log(title, { title }) // need to return in the reducer: {title:'dddd'}
	  dispatch(addDeck({ title }))
	  navigation.navigate('Deck', { title })
	}

	render() {
	  const { title } = this.state
	  return (
  <KeyboardAvoidingView
    behavior="padding"
    enabled
    style={styles.containerForm}
  >
    <TextInput
      onChangeText={title => this.setState({ title })}
      placeholder="Deck title"
      style={styles.inputCard}
      value={title}
    />
    <Button
      color="#12CC8B"
      onPress={this.submit}
      title="Create Deck"
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

export default connect()(AddDeck)
