import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col } from "reactstrap"
import TaskInput from "../components/taskInput"

export default function Jumbotron() {
    return (
        <Row className="justify-content-center">

            <Col md={8}>
                <div style={jumboStyle} class="jumbotron">
                    <header style={{ display: "flex", justifyContent: "center" }}>
                        <h1>Sam's Task Motivator</h1>
                    </header>
                    <hr></hr>
                    <TaskInput />
                   
                </div>
            </Col>


        </Row>

    )
}

var jumboStyle = {
    marginTop: "50px",
    height: "300%",
    backgroundColor: "dark-grey"
}