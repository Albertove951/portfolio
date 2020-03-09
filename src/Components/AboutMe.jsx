import React, {Component} from "react";

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="flex">
                <img src="https://secure.img1-ag.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg" alt="" className="headshot"/>
                <p className="about-me-title">Full Stack Developer</p>
                </div>
                <p className="about-me-content">gravida arcu ac tortor dignissim. Sit amet facilisis magna etiam tempor. Lectus sit amet est placerat in egestas. Dolor sit amet consectetur adipiscing elit. Dictum sit amet justo donec.</p>
            </div>
        )
    }
}