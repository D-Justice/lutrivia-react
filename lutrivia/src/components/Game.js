import React from 'react'
import Data from '../data'
import Question from './Question'


export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'white',
            userAnswers: [],
            correctAnswers: Data.questions.map(each => each.answer),
            answeredCorrect: [],
        }
    }
    updateUserAnswers = (id, answer) => {
        let updatedData = this.state.userAnswers
        try {
      this.state.userAnswers.map((each, index) => {
        if (each.id === id) {
          
          this.setState({
              userAnswers: [this.state.userAnswers.splice(index, 1)]
          })
        }
      })
    }
    catch {

    }
        this.setState(prevState => {
            return {
                userAnswers: [...this.state.userAnswers, {answer: answer, id: id}]
            }
        
            
        })
    }
    handleSubmit = (e, newgame=false) => {
        
        e.preventDefault()
       
        this.state.userAnswers.map((each, index) => {
            
            if (each.answer === this.state.correctAnswers[each.id]) {
                this.setState(prevState => {
                    return {
                        answeredCorrect: [...prevState.answeredCorrect, true]
                }
                    
                })
            } else {
                this.setState(prevState => {
                    return {
                        answeredCorrect: [...prevState.answeredCorrect, false]
                }
                    
                })
            }
        })
        

    }
    newGame = () => {
        window.location.reload(true);
    }
    
    render() {
       const {
           answeredCorrect
       } = this.state
       let score = this.state.answeredCorrect.filter(each=> each === true)
       let style = {border: '1px solid grey', borderRadius: '5px', fontSize: '25px'}
        return (
            <div style={{border: '1px solid grey', borderRadius: '5px'}}>
            <h1>Lutrivia</h1>
            <button style={style} type='submit' onClick={() => this.newGame()}>New game</button>
            <p style={{float: 'right'}}>SCORE: {score.length}</p>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <ul>
                    {Data.questions.map((each, index) => <Question key={index} index={index} question={each.text} updateUserAnswers={this.updateUserAnswers} color={answeredCorrect.length > 1 ? answeredCorrect[index] ? 'green': 'red' : 'lightgrey'}/>)}
                </ul>
                <input style={style} type='text' placeholder='Name' />
                <button style={style} type='submit'>Submit Score</button>
                </form>
            </div>
        )
    }
}