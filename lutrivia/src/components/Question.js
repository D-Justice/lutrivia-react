import React, {useState} from 'react'
import questions from '../data'


export default function Question(props) {

        const [answered, setAnswered] = useState()
        let style = {backgroundColor: props.color, fontSize: '25px'}
        let unansweredStyle = {backgroundColor: 'lightgrey', fontSize: '25px'}
        
        return (
            <div style={{backgroundColor: 'lightgrey',marginBottom: '5px', border: '1px solid grey', borderRadius: '5px'}}>
            <li style={{listStyle: 'none', fontSize: '25px'}}>{props.question}</li>
            <label style={answered ? style : unansweredStyle}><input type='radio' name={`radio${props.index}`}value='true' onChange={()=>{
                setAnswered(true)
                props.updateUserAnswers(props.index, true)}} required/>True </label>
            <label style={!answered ? style : unansweredStyle}><input type='radio' name={`radio${props.index}`} value='false' onChange={()=>{
                setAnswered(false)
                props.updateUserAnswers(props.index, false)}} required/>False </label>
            </div>
        )
    }
Question.defaultProps = {
    color: 'white'
}
