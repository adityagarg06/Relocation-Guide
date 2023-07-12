import React, { useEffect } from 'react';
import './Navbar.style.css';
import { Button } from '../Button';

function Navbar() {
  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    const handleClick = () => {
      navbarLinks.classList.toggle('active');
    };

    toggleButton.addEventListener('click', handleClick);

    return () => {
      toggleButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="brand-title">Relocation Guide</div>
      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
          <a href="/login">Sign In</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
