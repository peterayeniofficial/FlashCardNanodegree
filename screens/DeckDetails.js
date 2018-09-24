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
     title: `Deck: ${navigation.state.params.title}`,
   });
   render() {
     console.log(this.props)
     const { navigation } = this.props
     const {
       questions, title, numberCard, randColor,
     } = navigation.state.params
     return (
       <View style={styles.container}>
         <View style={[styles.borderBox, {
            borderColor: randColor,
           }]}
         >
           <Text style={[styles.title, { color: randColor }]}>
             {title }
           </Text>
           <Text style={[styles.subTitle, { color: randColor }]}>
             {numberCard }
           </Text>

         </View>
         <View style={{
           alignItems: 'flex-start',
           justifyContent: 'flex-start',
           flex: 1,
           }}
         >
           <Button
             containerStyle={{
             padding: 12,
             height: 55,
             overflow: 'hidden',
             borderRadius: 5,
             backgroundColor: white,
             marginBottom: 10,
             borderWidth: 1,
             borderColor: purple,
             }}
             navigateAction
             onPress={() => this.props.navigation.navigate('AddCard', { title })}
             style={{ fontSize: 25, color: purple }}
           >
            Add Card
           </Button>
           <Button
             containerStyle={{
             padding: 12,
             height: 55,
             overflow: 'hidden',
             borderRadius: 5,
             backgroundColor: purple,
             borderWidth: 1,
             borderColor: purple,
             }}
             onPress={() => navigation.navigate(
            'Quiz',
            {
              questions, title, numberCard: questions.length, randColor,
            },
)}
             style={{ fontSize: 25, color: purple, backgroundColor: purple }}
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
  // btn: {
  // fontSize: 30,
  // borderColor: purple,
  // color: purple,
  // },
  // btnActive: {
  // borderColor: white,
  // backgroundColor: purple,
  // color: white,
  // },
  borderBox: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 12,
    marginTop: 0,
  },

})
export default withNavigation(DeckDetails)
