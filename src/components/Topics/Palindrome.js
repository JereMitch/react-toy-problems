import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  
    onChange = (e) => {
      const handleChange = (input) => {
        this.setState({ userInput: input });
        // console.log(input)
      };
      handleChange(e.target.value);
    };

    onClick = () => {
      let reverse = [];
      let user = this.state.userInput.replace(/\s/g, "").toLowerCase();

      for (let i = this.state.userInput.length - 1; i >= 0; i--) {
        if (this.state.userInput.charAt(i) === " ") {
          continue;
        }
        reverse.push(this.state.userInput.toLowerCase().charAt(i));
      }
      console.log(reverse)
      if (reverse.join("") === user) {
        this.setState({ Results: "true" });
      } else {
        this.setState({ Results: "false" });
      }
      console.log(this.state.onClick)
      console.log(this.state.userInput)


    };
    render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={this.onChange} />
        <button className="confirmationButton" onClick={this.onClick}>
          Click Me!
        </button>
        <span className="resultsBox">Results:{this.state.onClick}</span>
      </div>
    );
  }
}
