
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Relais RH Logo" className="logo" />
          <span className="logo-text">Relais RH</span>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={toggleMenu}>À Propos</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
