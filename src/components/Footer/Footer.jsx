import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'
import profile from '../../assets/profile.png'
import linkedin from '../../assets/linkedin.png'
import git from '../../assets/git.png'
const Footer = () => {
  return (
    <div  className='footer'>
    <div className='footer-top'>
        <div className='footer-top-left'>
            <h2>StefaNo</h2>
            <p>I am Fullstack developer from, Italy with +2 years of experience</p>
            <a href="https://www.linkedin.com/in/stefano-loreto-063504207/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <div className='github'>
      <a href="https://github.com/stenos516" target="_blank" rel="noopener noreferrer">
        <img src={git} alt="Github" />
      </a>
      </div>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={profile} alt></img>
                <input type='email' placeholder='Enter Your Email'/>
            </div>
            <div className='footer-subscribe'>Subscribe</div>

        </div>
    </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024 | Stefano developer | All rigths reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>

      </div>
    </div>
  )
}

export default Footer

