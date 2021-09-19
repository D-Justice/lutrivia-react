import React, { useState } from 'react';
import Buttons from './components/Buttons'
import data from './data'
import Form from './components/Form';

function App() {
  const [userAnswers, setUserAnswers] = useState([])
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [color, setColor] = useState([])

  let updateState = (userAnswer, answer, id) => {
    try {
      userAnswers.map((each, index) => {
        if (each.id === id) {
          setUserAnswers([userAnswers.splice(index, 1)])


        }
      })
    }
    catch {

    }

    (userAnswer === answer.toString()) ? setUserAnswers([...userAnswers, { answer: 'correct', id: id }]) : setUserAnswers([...userAnswers, { answer: 'incorrect', id: id }])

  }
  let handleSubmit = (e) => {
    e.preventDefault()
    let correctTemp = 0
    let incorrectTemp = 0
    let temp;
    userAnswers.map((each, index) => {
      
      each.answer === 'correct' ? temp = {color: 'green', id: index} : temp = {color: 'red', id: index}
      each.answer === 'correct' ? correctTemp += 1 : incorrectTemp += 1
      
    })
    setCorrect(correct + correctTemp)
    setIncorrect(incorrect + incorrectTemp)
    setColor([...color].concat(temp))

    
  }



  return (
    <div>
      <p>Score: {correct} </p>
      <form onSubmit={(e) => { handleSubmit(e) }} >
        {data.questions.map((questions, index) => <Buttons key={index} color={color} identifier={index} answer={updateState} questionAnswer={questions.answer} question={questions.text} />)}
        <Form />

      </form>
    </div>
  );
}

export default App;
