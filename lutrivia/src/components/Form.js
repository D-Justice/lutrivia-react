import React from 'react'


export default class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    updateInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return(
            <>
                <input onChange={e => this.updateInput(e)}type='text' placeholder='Name'></input>
                <button type='submit'>Submit Score</button>
                
            </>
        )
    }

}