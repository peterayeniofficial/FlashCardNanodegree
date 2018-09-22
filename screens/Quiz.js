import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { red, warning, tintColor, lightPurp, purple, white } from '../constants/Colors'
import Button from 'react-native-button'

// constance to use with switch() view
const QUESTION_VIEW = 'QUESTION_VIEW'
const ANSWER_VIEW = 'ANSWER_VIEW'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck: ${navigation.state.params.title}`,
  });

  state = {
    count: 0,
    currentQuestion: 0,
    correctAnswers: 0,
    view: QUESTION_VIEW,
  }


  switchView = view => this.setState({
	  view,
  })

	answerQuestion = (correct) => {
	  if (correct) { // correct === true
	    this.setState(state => ({
	      correctAnswers: state.correctAnswers + 1,
	    }))
	  }
	  this.setState(state => ({ // correct === true && //correct === false
	    currentQuestion: state.currentQuestion + 1,
	    view: QUESTION_VIEW,
	  }))
	}

  renderBtns = () => (
    <View style={styles.renderbtns}>
      <View style={styles.viewBtn}>
        <Button
          containerStyle={[styles.containerBtn, {
            backgroundColor: tintColor,
            borderColor: tintColor,
           }]}
          onPress={() => this.answerQuestion(true)}
          style={{ fontSize: 25, color: white }}
        >
            Correct
        </Button>
      </View>

      <View style={styles.viewBtn}>
        <Button
          containerStyle={[styles.containerBtn, {
             backgroundColor: red,
             borderColor: red,
           }]}
          onPress={() => this.answerQuestion(true)}
          style={{ fontSize: 25, color: white }}
        >
            Incorrect
        </Button>
      </View>
    </View>
  )

  questionCounter = (currentQuestion, numberOfQuestions) => (
    <View>
      <Text style={[styles.percentageCard, { color: white }]}>
        Question : {currentQuestion + 1} / {numberOfQuestions}
      </Text>
    </View>
  )

	restartQuiz = () => this.setState({
	  currentQuestion: 0,
	  correctAnswers: 0,
	})

	render() {
	  // console.log(this.props)
	  const { currentQuestion, correctAnswers, view } = this.state
	  const { navigation } = this.props
	  const {
	    questions, title, numberCard, randColor,
	  } = navigation.state.params
	  console.log(questions, title, numberCard, randColor)

	  if (currentQuestion === questions.length) {
	    return 	(
  <View style={styles.container}>
    <Text style={[styles.percentageCard, { color: red, paddingTop: 20, paddingBottom: 20 }]}>
Your score: {correctAnswers * 100 / questions.length}%
    </Text>
    <View style={styles.btnContainer}>
      <View style={styles.btnView}>
        <Button
          containerStyle={[styles.containerBtn, {
             backgroundColor: white,
             borderColor: purple,
           }]}
          onPress={this.restartQuiz}
          style={{ fontSize: 25, color: purple }}
        >
            Restart Quiz
        </Button>
      </View>
      <View style={styles.btnView}>
        <Button
          containerStyle={[styles.containerBtn, {
             backgroundColor: white,
             borderColor: purple,
           }]}
          onPress={() => navigation.goBack()}
          style={{ fontSize: 25, color: purple }}
        >
            Return to deck
        </Button>
      </View>
    </View>
  </View>)
	  } // end if

	  switch (view) {
	    case ANSWER_VIEW:
	      return (
  <View style={styles.container}>
    <View style={[styles.cardView, { backgroundColor: randColor }]}>
      {this.questionCounter(currentQuestion, questions.length)}
      <Text style={[styles.cardText, { color: white }]}>
        {questions[currentQuestion].answer}
      </Text>
      <TouchableOpacity style={styles.btnTouch}>
        <Button
          containerStyle={[styles.btnAnswer, {
             backgroundColor: white,
             borderColor: purple,
             }]}
          onPress={() => this.switchView(QUESTION_VIEW)}
          style={{ fontSize: 25, color: purple }}
        >
									See Question
        </Button>
      </TouchableOpacity>
    </View>
    {this.renderBtns()}
  </View>
	      )
	    case QUESTION_VIEW:
	      return (
  <View style={styles.container}>
    <View style={[styles.cardView, { backgroundColor: randColor }]}>
      {this.questionCounter(currentQuestion, questions.length)}
      <Text style={[styles.cardText, { color: white }]}>
        {questions[currentQuestion].question}
      </Text>
      <TouchableOpacity style={styles.btnTouch}>
        <Button
          containerStyle={[styles.btnAnswer, {
             backgroundColor: white,
             borderColor: purple,
             }]}
          onPress={() => this.switchView(ANSWER_VIEW)}
          style={{ fontSize: 25, color: purple }}
        >
          See Answer
        </Button>
      </TouchableOpacity>
    </View>
    {this.renderBtns()}
  </View>)
	  }
	}
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {

  },
  score: {

  },
  btnView: {
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

  },
  containerBtn: {
    alignSelf: 'center',
    padding: 12,
    height: 55,
    width: 300,
    marginRight: 10,
    marginLeft: 10,
    overflow: 'hidden',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  cardView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    // height: 150,
    width: 300,
    marginRight: 10,
    marginLeft: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  btnAnswer: {
    alignSelf: 'flex-end',
    padding: 12,
    height: 55,
    width: 300,
    marginRight: 10,
    marginLeft: 10,
    overflow: 'hidden',
    marginBottom: -10,
  },
  percentageCard: {
    fontSize: 22,
  },
  cardText: {
    fontSize: 25,
    padding: 10,
  },
  btnTouch: {
    fontSize: 15,
  },
})
export default Quiz
