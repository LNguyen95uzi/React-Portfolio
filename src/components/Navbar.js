import React from "react"


export default function Navbar() {
    return (
        <header className="navbar container">
            <section className="navbar-section">
                <strong><a href="#about" className="btn btn-link">About</a></strong>
                <strong><a href="#projects" className="btn btn-link">Projects</a></strong>
                <strong><a href="#footer" className="btn btn-link">Contact</a></strong>
                <strong><a href="https://docs.google.com/document/d/1gfHfp_o9DjjOQbv9V2Qt_mEmnIFenAMLJ_8unMq0-aw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-link">Resume<i class="far fa-file"></i></a></strong>
            </section> 
        </header>
    );
}