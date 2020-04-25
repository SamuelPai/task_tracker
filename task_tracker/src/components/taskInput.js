import React, { Component } from 'react';

export default class TaskInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: " "
        }
    }

    changeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            task: event.target.value
        })
    }
    
    submitHandler = (event) => {
        event.preventDefault() //to prevent page refresh
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.submitHandler} >
                    <label style={{ margin: "5px 0px" }}>Create a Task:</label>
                    <input onChange = {this.changeHandler}  style={{ width: "100%" }}></input>
                    <input style={{ padding: "5px", marginTop: "5px" }} type="submit"></input>
                </form>
                <hr></hr>
            </div>
        )
    }
}
