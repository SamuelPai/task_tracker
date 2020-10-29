import React from 'react'
import "./navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav style={{width:"102%"}} class="navbar navbar-expand-lg navbar-light bg-dark">
                <a style={navStyle} class="navbar-brand"> Task Tracker</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a id="navTitle1" class="nav-link" href="#">Daily <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a id="navTitle2" class="nav-link navTitle" href="#">Priority</a>
                        </li>
                        <li class="nav-item">
                            <a id="navTitle3" class="nav-link navTitle" href="#">Ongoing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        
    </span>
                </div>
            </nav>
        </div>
    )
}

var navStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "URW Chancery"
}
