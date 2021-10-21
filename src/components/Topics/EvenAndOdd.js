import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    }
  }
  
    //  
      render() {
        const onChange = (e) => {
            const handleChange = (input) => {
                this.setState({ userInput: input})
                console.log(input)
            }
            handleChange(e.target.value)
        }

        const onclick = (userInput) => {
            let array = userInput
            let even = []
            let odd = []

            for(let i = 0; i < array.length; i++){
                if(array[i] % 2 === 0){
                    even.push(array[i])
                } else {
                    odd.push(array[i])
                }
            }
            this.setState({ evenArray: even, oddArray: odd })
        }

    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input type="number"  className="inputLine" onChange = {onChange} />
          
        <button className="confirmationButton" onclick={onclick}>Click Me!</button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
      </div>
    );
  }
}
