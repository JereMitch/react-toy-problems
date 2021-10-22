import React, { Component } from 'react'

export default class Sum extends Component {
    constructor(props){
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    render() {
        const onChange = (e) => {
            const handleChange = (input) => {
              this.setState({ number1: input });
              // console.log(input)
            };
            handleChange(e.target.value);
          };

          const onChange2 = (e) => {
            const handleChange = (input) => {
              this.setState({ number2: input });
              // console.log(input)
            };
            handleChange(e.target.value);
          };

          const onClick = () => {
            this.setState({ sum: parseInt(this.state.number1) + parseInt(this.state.number2)})
          }

        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="number" className="inputLine" value={this.state.number1} onChange={onChange} />
                <input type="number" className="inputLine" value={this.state.number2} onChange={onChange2} />
                <button className="confirmationButton" onClick={onClick}>Click Me!</button>
                <span className="resultsBox">
                    Answer: {this.state.sum}
                </span>
            </div>
        )
    }
}
