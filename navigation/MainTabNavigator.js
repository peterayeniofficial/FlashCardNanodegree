import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import { tintColor, lightPurp, purple, white } from '../constants/Colors'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import AddDeck from '../screens/AddDeck'
import AddCard from '../screens/AddCard'
import DeckDetails from '../screens/DeckDetails'
import Quiz from '../screens/Quiz'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cube${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const SettingAddDeck = createStackNavigator({
  Settings: AddDeck,
})

SettingAddDeck.navigationOptions = {
  tabBarLabel: 'New Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-play${focused ? '' : '-outline'}` : 'play-arrow'}
    />
  ),
}

const Tabs = createBottomTabNavigator({
  HomeStack,
  SettingAddDeck,
})

export default createStackNavigator({
  // new routes
  Decks: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  DeckDetails: {
    screen: DeckDetails,
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    mode: 'modal',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  AddCard: {
    screen: AddCard,
    mode: 'modal',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  AddDeck: {
    screen: AddDeck,
    mode: 'modal',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
})
