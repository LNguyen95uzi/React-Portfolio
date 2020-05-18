import React from "react"
import Selfie from "../components/selfie.JPG"

export default function About() {
    return (
        <div id="about">
            <div style={{
                backgroundColor: "#007DB3",
                color: "black",
                marginTop: "10px",
                borderRadius: "25px",
                textAlign: "center"
            }} className="hero column col-11 col-xs-12 container">
                <div className="hero-body">
                    <img src={Selfie} alt="Selfie" />

                    <h1>Quick Bio</h1>
                    <p>Hello! I am a Full-stack web developer leveraging financial background to build more efficient and accurate web applications to make managing large amounts of data easier!</p>

                    <p>Recent graduate of the University of Pennsylvania Full Stack web development boot camp with newly developed skills in JavaScript, CSS, React.js, MongoDB, MySQL, and responsive web design.
                    </p>

                    <p>Very determined problem solver that is passionate about learning new skills and displaying them through my apps, focusing on functionality and design. With each project, my goal is to best engage my audience for an enjoyable user experience.
                    </p>

                    <p>I applied aspects of UX and data management on a recent project to develop a multi-page MERN app that helps users learn more about cryptocurrency, staking pools, and about the Cardano ADA coin.
                    </p>

                    <p>I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.  Learning
                    Python while under quarantine!</p>
                </div>
            </div>
        </div>
    )
}