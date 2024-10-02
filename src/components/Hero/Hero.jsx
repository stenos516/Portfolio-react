import React from 'react'
import './Hero.css'
import foto from '../../assets/foto.png'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={foto} alt=''></img>
      <h1><span>I'm Stefano Loreto,</span> Fullstack Developer</h1>
      <p>With a solid experience in both frontend and backend development, I am committed to designing and building digital solutions that are both aesthetically pleasing and highly performant. I work daily with modern technologies such as JavaScript, React, Node.js, and MongoDB, which allows me to create comprehensive, scalable, and secure applications.</p>
    <div className='hero-action'>
    <div className='hero-connect'>Connect with me</div>
    <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero
