import React from 'react';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
  <>
   <Navbar></Navbar>
   <Intro></Intro>
   <Projects></Projects>
   <About></About>
   <Footer></Footer>
   </>
  );
}

export default App;
