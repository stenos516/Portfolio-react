import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import TitleContact from './components/TitleContact/TitleContact'



const App = () => {
  return (
    <div>
   <Navbar /> 
  <Hero/>
  <About/>
  <Skills/>
<Services/>
<MyWork/>
<TitleContact/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App
