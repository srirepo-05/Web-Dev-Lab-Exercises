import React from 'react';
import './App.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>MyWebsite</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
