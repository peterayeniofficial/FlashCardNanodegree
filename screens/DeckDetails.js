import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { purple, white, lightPurp, blue } from '../utils/colors'
import Button from 'react-native-button'
import { NavigationActions, withNavigation } from 'react-navigation'
// screen
import Quiz from './Quiz'

class DeckDetails extends Component {
  // header navigation
   static navigationOptions = ({ navigation }) => ({
     title: navigation.state.params.title,
   });
   render() {
     console.log(this.props)
     const { navigation } = this.props
     const {
       questions, title, numberCard, randColor,
     } = navigation.state.params

     console.log(questions, title, numberCard, randColor)
     return (
       <View>
         <Text style={styles.title}>
           {title }
         </Text>
         <Text style={styles.subTitle}>
           {numberCard }
         </Text>
         <View style={{ marginTop: 10 }}>
           <Button
             containerStyle={{
              padding: 12,
              height: 55,
              overflow: 'hidden',
              borderRadius: 5,
              backgroundColor: purple,
              marginBottom: 10,
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: randColor,
             }}
             onPress={() => this.handleAddCard()}
             style={{ fontSize: 25, color: randColor }}
           >
            Add Card
           </Button>
           <Button
             containerStyle={{
               padding: 12, height: 55, overflow: 'hidden', borderRadius: 5, backgroundColor: randColor, marginBottom: 10,
             }}
             disabledContainerStyle={{ backgroundColor: randColor }}
             onPress={() => navigation.navigate(
            'Quiz',
            {
              questions, title, numberCard, randColor,
            },
)}
             style={{ fontSize: 25, color: 'white' }}
             styleDisabled={{ color: 'white' }}
           >
            Start Quiz
           </Button>
         </View>
       </View>
     )
   }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 50,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    fontSize: 30,
    borderColor: purple,
    color: purple,
  },
  btnActive: {
    borderColor: white,
    backgroundColor: purple,
    color: white,
  },

})
export default DeckDetails
