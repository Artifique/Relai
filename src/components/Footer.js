
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>Relais RH</h4>
          <p>Fédérons pour l'emploi.</p>
          <p>123 Rue de l'Exemple, 75000 Paris</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">L</a> 
            <a href="#" aria-label="Twitter">T</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Relais RH. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
