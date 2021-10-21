import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state = {
            unFilteredArray: [
                {id: 1, name: 'Jeremy', age: 23},
                {id: 2, name: 'Jake', bread:'white'},
                {id: 3, name: 'Justin', occupation: 'Engineer'},
                {id:4, name: 'Bruno', age: 22},
            ],
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
                const clickArr = this.state.unFilteredArray.filter( (el) =>
                     (el.hasOwnProperty(userInput)) );
                  
                this.setState({ filteredArray: clickArr });
            };
            handleClick(this.state.userInput)
        }

        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">
                    Unfiltered Array: 
                    <br />
                    {/* {this.state.unFilteredArray.map((item) => <li key={item.id}>{item.name}, {item.age}</li>)} */}
                    {JSON.stringify(this.state.unFilteredArray)}
                    </span>
                <input className="inputLine" onChange={onChange} />
                <button className="confirmationButton" onClick={onClick}>Click Me!</button>
                <span className="resultBox filterObjectPB">
                    Filtered Array: 
                    <br />
                    {/* {this.state.filteredArray.map(( data ) => <li key={data.id}>{data.name}</li>)} */}
                    {JSON.stringify(this.state.filteredArray)}
                </span>
            </div>
        )
    }
}
