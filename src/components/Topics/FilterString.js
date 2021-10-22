import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor(props){
        super(props)
        this.state = {
            unFilteredArray: ["Jeremy", "Nathan", "Tyler", "Nathan"],
            userInput: "",
            filteredArray: [],
        }
    }

    render() {
        const onChange = (e) => {
            const handleChange = (input) => {
                this.setState({ userInput: input})
                // console.log(input)
            }
            handleChange(e.target.value)
        }

        const onClick = () => {
            const handleClick = (userInput) => {
                const newStr = this.state.unFilteredArray.filter(el => el.includes(userInput))
                    // console.log(userInput)
                this.setState({ filteredArray: newStr })
            }
            handleClick(this.state.userInput)
        }

        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">
                    Unfiltered Array: 
                    <br />
                    {this.state.unFilteredArray.map((item , index) => <li>{item}</li>)}
                </span>
                <input className="inputLine" onChange={onChange} />
                <button className="confirmationButton" onClick={onClick} >Click Me!</button>
                <span className="resultsBox filterStringRB">
                    Filtered Array: 
                    <br />
                    {this.state.filteredArray.map(data => <li>{data}</li>)}
                </span>
            </div>
        )
    }
}
