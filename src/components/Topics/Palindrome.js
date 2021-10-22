import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }
  
  render() {
    const onChange = (e) => {
      const handleChange = (input) => {
        this.setState({ userInput: input });
        // console.log(input)
      };
      handleChange(e.target.value);
    };

    const onClick = () => {
      let reverse = [];
      let user = this.state.userInput.replace(/\s/g, "").toLowerCase();

      for (let i = this.state.userInput.length - 1; i >= 0; i--) {
        if (this.state.userInput.charAt(i) === " ") {
          continue;
        }
        reverse.push(this.state.userInput.toLowerCase().charAt(i));
      }

      if (reverse.join("") === user) {
        this.setState({ palindrome: "true" });
      } else {
        this.setState({ palindrome: "false" });
      }
    };


    
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={onChange} />
        <button className="confirmationButton" onClick={onClick}>
          Click Me!
        </button>
        <span className="resultsBox">Results: {this.state.palindrome}</span>
      </div>
    );
  }
}
