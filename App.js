import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { connect, Provider } from 'react-redux'
import reducer from './reducers'
import middlewares from './middleware'
import { Constants, AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { purple, white } from './constants/Colors'


function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar backgroundColor={backgroundColor} translucent {...props} />
    </View>
  )
}
// redux
const store = createStore(reducer, middlewares)

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading} // the loading is complete
          startAsync={this._loadResourcesAsync}
        />
      )
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <FlashCardStatusBar backgroundColor={purple} barStyle="light-content" />}
          <AppNavigator /> {/* navigation  */}
        </View>
      </Provider>
    )
  }

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/home-dev.png'),
      require('./assets/images/home-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Regular.ttf'),
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
  },
})
