import React from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
