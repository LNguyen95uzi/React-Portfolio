import React from "react"
import Shark from "./shark.png"
import Fyre from "./fyreapp.png"
import Password from "./password.png"
import Employee from "./employee.gif"
import README from "./README.gif"

export default function Projects() {
    return (
        <div id="projects">

            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">sharkFin</div>
                    </div>
                    <div className="card-body">
                        Track current stock news and prices with our application! Be able to search any
                        US stock name/ticker and view a chart with their prices and articles associated with them with
                        NYT API as well as Financial Modeling API!</div>
                    <div className="card-image">
                        <a href="https://lnguyen95uzi.github.io/sharkFin/" target="_blank" rel="noopener noreferrer"> <img src={Shark} className="img-responsive" alt="sharkFin" /></a>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/LNguyen95uzi/sharkFin" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REPO</a>
                    </div>
                </div>
            </div>

            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Fyre</div>
                    </div>
                    <div className="card-body">
                        Full Stack web application of a random song generator to find your next
                        favorite song! Using Spotfiy Web API with a "Fyre" or "Trash" designation to save the song to
                        your playlist! (Need Spotify Premium)</div>
                    <div className="card-image">
                        <a href="https://fyre-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src={Fyre} className="img-responsive" alt="Fyre" /></a>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/LNguyen95uzi/Fyre" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REPO</a>
                    </div>
                </div>
            </div>

            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Employee Roster</div>
                    </div>
                    <div className="card-body">
                        This application is run through the User's command line tool to quicly and
                        easily make a roster of a company's employees! Differentiating from Manager, Engineer, and
                        Intern, and includes data for Name, ID, Office #, and Email!</div>
                    <div className="card-image">
                        <a href="https://github.com/LNguyen95uzi/Employee-Roster" target="_blank" rel="noopener noreferrer"> <img src={Employee} className="img-responsive" alt="Employee" /></a>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/LNguyen95uzi/Employee-Roster" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REPO</a>
                    </div>
                </div>
            </div>

            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Employee Roster</div>
                    </div>
                    <div className="card-body">
                        My README Generator allows the user to create a complete descriptive README for
                        any GitHub repository through their command line tool!</div>
                    <div className="card-image">
                        <a href="https://github.com/LNguyen95uzi/README-Generator" target="_blank" rel="noopener noreferrer"> <img src={README} className="img-responsive" alt="README" /></a>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/LNguyen95uzi/README-Generator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REPO</a>
                    </div>
                </div>
            </div>

            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Password Generator</div>
                    </div>
                    <div className="card-body">
                    Easy to use Password Generator for any one that wants to create any type of
                        password! Users can choose how many characters, if they want to use uppercase or lowercase,
                        numbers, and/or special characters!</div>
                    <div className="card-image">
                        <a href="https://lnguyen95uzi.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer"> <img src={Password} className="img-responsive" alt="README" /></a>
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/LNguyen95uzi/Password-Generator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">REPO</a>
                    </div>
                </div>
            </div>

        </div>
    )
}