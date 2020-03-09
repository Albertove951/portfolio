import React, { Component } from "react"
import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"

import "./style.css"


export default class App extends Component {

    render() {
        return(
            <div className="container">
                <Header/>
                <AboutMe/>
                <Projects/>
            </div>
        )
    }
}