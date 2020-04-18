import React, { Component } from 'react'
import Navbar from "../components/navbar.js"
import Jumbotron from "../components/jumbotron"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
            </div>
        )
    }
}
