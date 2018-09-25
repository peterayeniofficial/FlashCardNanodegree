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
import { StyledOpenSansText } from '../components/StyledText'
import { tintColor, lightPurp, purple, white } from '../constants/Colors'

import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { SimpleLineIcon } from '../components/IconsGeneral'

import Deck from '../components/Deck'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { dispatch } = this.props
    // dispatch(handleInitDecks()) // fetch datas
	  fetchDecks()
	    .then(decks => dispatch(receiveDecks(decks)))
  }
  render() {
    const { decks } = this.props
    // console.log(decks)
    return (
      <View style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            <StyledOpenSansText style={styles.title}>
              CARD DECKS
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
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 0,
  },
  getStartedContainer: {
    marginTop: 10,
    marginBottom: 10,
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
    alignSelf: 'center',
    // fontSize: 17,
		 // lineHeight: 24,
    textAlign: 'center',
    // marginVertical: 7,
    backgroundColor: tintColor,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
})
function mapStateToProps(decks, props) {
  console.log(Object.values(decks).reverse())
  return {
    decks: Object.values(decks).reverse(),
  }
}
export default connect(mapStateToProps)(HomeScreen)
