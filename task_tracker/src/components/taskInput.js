import React, { Component } from 'react';
import axios from "axios";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";

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

    handleTaskEdit = () => {
        console.log("edit button worked")
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
        
        const getProtectedTasks = async () => {
           
            try {
                const token = "testing"
                const self = this;
                let response = await axios.get("/api/tasks", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                self.setState({
                    allTasks: response.data
                })

            } catch {

            }
        }
        getProtectedTasks()

    }

    render() {
        // const { task, allTasks } = this.state; //destructuring the state
        

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
                        <li style={{ fontFamily: "garamond", fontSize: "25px", margin: "10px" }} className="tasks">{task.task}
                            <button className="btn m-1 btn-danger btn-xs" onClick={() => this.handleDelete(task.id)}>x</button>
                            <button className="btn btn-info btn-xs" onClick={this.handleTaskEdit}><i class="fa fa-pencil" style={{ fontSize: "8px" }}></i></button>
                        </li>
                    )
                    )}
                </ul>
            </div>
        )
    }
}
