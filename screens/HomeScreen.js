import React from 'react'
import { connect } from 'react-redux'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import { WebBrowser } from 'expo'
import { StyledOpenSansText } from '../components/StyledText'
import { tintColor, lightPurp, purple, white } from '../constants/Colors'

import { handleInitDecks } from '../utils/helpers'
import { SimpleLineIcon } from '../components/IconsGeneral'

import Deck from '../components/Deck'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitDecks()) // fetch datas
  }

  render() {
    const { decks } = this.props
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            <StyledOpenSansText style={styles.title}>
              CARD DECKS
              <SimpleLineIcon
                name={
                  Platform.OS === 'ios'
                  ? 'arrow-down-circle'
                  : 'md-information-circle'
                }
              />
            </StyledOpenSansText>
          </Text>
        </View>

        <FlatList
          data={decks}
          keyExtractor={(item, i) => item.title}
          renderItem={({ item }) => (
            <Deck questions={item.questions} title={item.title} />
        )}
          style={styles.containerDecks}
        />
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({

  testContainer: {
  },
  childQuestion: {
    zIndex: 1,
    position: 'absolute',
    backgroundColor: purple,
    // flex: 1,
    // width: null,
    // height: null,
  },
  childAnswer: {
    zIndex: 0,
    // position: 'absolute',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // backgroundColor: 'red',
    // opacity: 0.3,
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 0,
  },
  getStartedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  title: {
    flex: 1,
    color: white,
    fontSize: 20,
    marginRight: 20,
  },
  getStartedText: {
    fontSize: 17,
		 // lineHeight: 24,
    textAlign: 'center',
    // marginVertical: 7,
    backgroundColor: tintColor,
    padding: 10,
    marginTop: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // test: {// bottom in absolute with Platform select
  // position: 'absolute',
  // bottom: 0,
  // left: 0,
  // right: 0,
  // ...Platform.select({
  // ios: {
  // shadowColor: 'black',
  // shadowOffset: { height: -3 },
  // shadowOpacity: 0.1,
  // shadowRadius: 3,
  // },
  // android: {
  // elevation: 20,
  // },
  // }),
  // alignItems: 'center',
  // backgroundColor: '#fbfbfb',
  // paddingVertical: 20,
  // },
})
function mapStateToProps(state, props) {
  return {
    decks: Object.values(state),
  }
}
export default connect(mapStateToProps)(HomeScreen)
