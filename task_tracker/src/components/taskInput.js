import React, { Component } from 'react';
import axios from "axios";

export default class TaskInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: " ",
            allTasks: []
        }
    }

    changeHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            task: event.target.value,
        })
    }

    handleDelete = (taskId) => {
        axios.delete("/api/task/" + taskId).then(data => {
            console.log("You deleted the task with an id of ", data)
        })
        window.location.reload();
    }

    submitHandler = (event) => {
        event.preventDefault() //to prevent page refresh
        console.log()

        fetch("/api/task", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state),

        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        this.setState({
            task: ""
        })
        window.location.reload()
    }

    componentDidMount() {
        console.log("component did mount")

        const self = this;
        axios.get("/api/tasks").then(function (data) {
            self.setState({
                allTasks: data.data
            })
            // console.log(self.state.allTasks[0].task)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} >
                    <label style={{ margin: "5px 0px" }}>Create a Task:</label>
                    <input value={this.state.task} onChange={this.changeHandler} style={{ width: "100%" }}></input>
                    <input style={{ padding: "5px", marginTop: "5px" }} type="submit"></input>
                </form>
                <hr></hr>
                <br></br>
                <ul>
                    {this.state.allTasks.map(task => (
                        <li>{task.task}<button onClick = {() => this.handleDelete(task.id)}>x</button></li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}
