import React, {useState} from 'react'
import './Navbar.css'
import logo2 from '../../assets/logo2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu.png'
import menu_close from '../../assets/close30.png'
const Navbar = () => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    SetIsMenuOpen(!isMenuOpen);
  };
    const closeMenu = () => {
      SetIsMenuOpen(false);
    };
  
  return (
    <div className='navbar'>
      <img src={logo2} className='logo2' alt=''></img>

      <img src={isMenuOpen ? menu_close : menu_open} alt='Menu' className='nav-mob-icon'
      onClick={toggleMenu}></img>
     <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
     
      <li><a href="#home" onClick={closeMenu}>Home</a></li>
<li><a href="#about" onClick={closeMenu}>About Me</a></li>
<li><a href="#services" onClick={closeMenu}>Services</a></li>
<li><a href="#work" onClick={closeMenu}>Portfolio</a></li>
<li><a href="#contact" onClick={closeMenu}>Contact</a></li>
</ul>
<a href="#contact"className='Button-connect'>Connect With Me</a>
    </div>
  )
}

export default Navbar
