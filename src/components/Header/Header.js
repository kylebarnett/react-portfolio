import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

  function changeUnderline(e) {
    e.target.style.color = 'white';
  }
  function changeBack(e) {
    e.target.style.color = 'black';
  }
  return (
    <div className="header-container">
      <Link onMouseOver={changeUnderline} onMouseLeave={changeBack} className="links" to="/">Home  </Link>
      <Link onMouseOver={changeUnderline} onMouseLeave={changeBack} className="links" to="/portfolio">Portfolio  </Link>
      <Link onMouseOver={changeUnderline} onMouseLeave={changeBack} className="links" to="/contact">Contact</Link>
    </div>
  )
}