import React from "react"

export default function Intro() {
    return (
        <div id="intro">
            <div style={{
                backgroundColor: "#007DB3",
                color: "#black",
                marginTop: "10px",
                borderRadius: "25px"
            }} className="hero column col-11 col-xs-12 container">
                <div className="hero-body">
                    <h1>Welcome to My Portfolio!</h1>
                    <p>Hello! My name is Long Nguyen and I am excited to be learning Full-Stack
                Web Development at the University of Pennsylvania! One day, I will be able to call myself a Full-Stack
                Web Developer! Some of my top projects and applications are displayed below
                as well as more about myself. I hope you enjoy!</p>
                </div>
            </div>
        </div>
    );
}