import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  
  const handleLinkClick = () => {
    // Uncheck the checkbox to close the menu
    document.getElementById('check').checked = false;
};

//changes background colour when scrolling
const changeBackgroundColor = () => {
  if (window.scrollY > 50) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', changeBackgroundColor);
  return () => {
    window.removeEventListener('scroll', changeBackgroundColor);
  };
}, []);



  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} `}>
      <input type="checkbox" id='check' />
      <label htmlFor="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars} />
            </label>

      <ul className='navbar-left'>
        <li className='home-icon'>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={handleLinkClick}>
            <FontAwesomeIcon icon={faPlane}/></Link>
        </li>
       </ul>
       <ul className='navbar-right'>
                <li className='links'>
                    <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={handleLinkClick}>About</Link>
                </li>
                <li className='links'>
                    <Link to="/design" className={location.pathname === '/design' ? 'active-link' : ''} onClick={handleLinkClick}>Design</Link>
                </li>
                <li className='links'>
                    <Link to="/theory" className={location.pathname === '/theory' ? 'active-link' : ''} onClick={handleLinkClick}>Theory</Link>
                </li>
                <li className='links'>
                    <Link to="/art" className={location.pathname === '/art' ? 'active-link' : ''} onClick={handleLinkClick}>Art</Link>
                </li>
            </ul>
      
      
    </nav>
  );
}

export default Navbar;