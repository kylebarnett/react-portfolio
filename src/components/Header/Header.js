import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header-container">
      <Link className="links" to="/">Home  </Link>
      <Link className="links" to="/portfolio">Portfolio  </Link>
      <Link className="links" to="/contact">Contact</Link>
    </div>
  )
}