import React from "react"
import Resume from "./WebDev Resume.pdf"



export default function Navbar() {
    return (
        <header className="navbar container">
            <section className="navbar-section">
                <a href="#About" className="btn btn-link">About</a>
                <a href="#Projects" className="btn btn-link">Projects</a>
                <a href="#Footer" className="btn btn-link">Contact</a>
                <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-link">Resume <i class="fas fa-file"></i> </a>
            </section>
            
        </header>
    )
}