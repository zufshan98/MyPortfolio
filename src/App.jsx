import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Learnings from './sections/Learnings'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Learnings/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
