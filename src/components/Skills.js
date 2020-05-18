import React from "react"

export default function Skills() {
    return (
        <div id="about">
            <div style={{
                backgroundColor: "#007DB3",
                color: "black",
                marginTop: "10px",
                borderRadius: "25px",
                textAlign: "center"
            }} className="hero column col-11 col-xs-12 container">
                <div className="hero-body"></div>

                <h1>My Skillset</h1>

                <h4>Web Development</h4>
                
                <p>Express.js, React.js, Node.js, JavaScript ES5/ES6, Handlebars.js, JQuery, JSON, AJAX, HTML, CSS, Heroku, REST APIs, Twitter Bootstrap, Sequelize, Google Materialize, Spectre.CSS</p>
                
                <h4>Databases</h4>
                
                <p>MongoDB, MySQL, FireBase</p>
                
                <h4>Miscellaneous</h4>
                
                <p>Windows, Git/Github, Google Suite, Microsoft Suite, macOS</p>
            </div>
        </div>
    )
}