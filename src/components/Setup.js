import React, {Component} from 'react';
import Button from './Button';
import classes from '../Global.module.css'

class Setup extends Component {
    state = { 
        questions: [],
        correctAnswer: '',
        showItems: 0,
        questionsNew: [],
        score: 0
     }
    fetchData = () => {
        fetch( 'https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(response => {
          this.setState({
            questions: response.results
          })
          console.log(this.state.correctAnswer)
         })
      }
    
      componentDidMount() {
        this.fetchData()
        
      }
      nextQuestion= () => {
        this.setState((state) => {
          return{
            showItems: state.showItems + 1,
            score: state.score + 1
          }
        })
      }
      nextQuestionWrongAnswer= () => {
        this.setState({
            showItems: this.state.showItems + 1,
            
        })
      }
    render() { 
        const { questions, showItems, score } = this.state;
        console.log(questions)
        const currentQuestion = questions[showItems]
        return ( <div className={classes.Mira}>
            {currentQuestion && <div>{currentQuestion.question}<p onClick={this.nextQuestionWrongAnswer}>{currentQuestion.incorrect_answers.map(i => <div className={classes.button}>{i}</div>)}</p><p  className={classes.button} onClick={this.nextQuestion}>{currentQuestion.correct_answer}</p></div>}
        {/* {console.log('Current Question',currentQuestion)} */}
        {(currentQuestion === undefined) || (currentQuestion === '') ? `Your score is: ${score}` : null}
        {/* <Button name="Next Question" clicked={this.nextQuestion}/> */}
        </div> );
    }
}
 
export default Setup;