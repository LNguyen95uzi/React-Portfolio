import React from "react"

export default function Footer() {
    return (
        <footer id="footer" className="hero column col-12 col-xs-12 container" style={{
            backgroundColor: "#16b9ff",
            marginTop: "10px",
            textAlign: "center",
            textSizeAdjust: "1000px"
        }}>
            <div className="hero-body">
                <h1>Contact</h1>
                <p><strong>Github: </strong><a href="https://github.com/LNguyen95uzi" target="_blank" rel="noopener noreferrer" className="github"> <i class="fab fa-github-square"></i></a> </p>
                <p><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/long-nguyen-a5aa13136/" target="_blank" rel="noopener noreferrer"> <i class="fab fa-linkedin"></i></a></p>
                <p><strong>Email:</strong><a href="mailto:LongPNguyen95@gmail.com" target="_blank" rel="noopener noreferrer"> LongPNguyen95@gmail.com</a></p>
            </div>
        </footer>
    )
}