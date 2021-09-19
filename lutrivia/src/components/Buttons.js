import React from 'react'


export default class Buttons extends React.Component {
    constructor(props) {
        super(props)

    }

    renderColor = () => {
        
        try {
            this.props.color.map((each, index) => {
                
                return index === this.props.identifier ? each.color : 'white'
            })
        }
        catch {
            // console.log('catch')
            return 'white'
        }
        
    }
    render() {
        
        console.log(this.props.color)
        return (
            <div>
                <p>{this.props.question}</p>
                <input  name={this.props.identifier} onChange={(e) => this.props.answer(e.target.value, this.props.questionAnswer, this.props.identifier)} value={true} type='radio'></input>
                <label style={{backgroundColor: this.renderColor()}}>True</label>
                <input name={this.props.identifier} onChange={(e) => this.props.answer(e.target.value, this.props.questionAnswer, this.props.identifier)} value={false} type='radio'></input>
                <label style={{backgroundColor: this.renderColor()}}>False</label>
            </div>
        )
    }
}