import React, {Component} from 'react';
import Button from './Button'

class Setup extends Component {
    state = { 
        questions: [],
        correctAnswer: '',
        showItems: 0,
        questionsNew: []
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
        this.setState({
            showItems: this.state.showItems + 1
        })
      }
    render() { 
        const { questions, showItems } = this.state;
        console.log(questions)

        const currentQuestion = questions[showItems]

        
        
        return ( <div>
            {currentQuestion && <div>{currentQuestion.question}<p>{currentQuestion.incorrect_answers.map(i => <div>{i}</div>)}</p><p>{currentQuestion.correct_answer}</p></div>}
        {console.log(questions)}
        <Button name="Next Question" clicked={this.nextQuestion}/>
        </div> );
    }
}
 
export default Setup;