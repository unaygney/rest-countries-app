import React from "react";
//SVG
import ThemeLogo from '../../assets/ThemeLogo.jsx';
function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
        <div className="site-title">
        <h1 className="title">Where in the world?</h1>
      </div>

      <div className="theme-container">
        <ThemeLogo />
        <h3 className="theme-title">Dark Mode</h3>
      </div>
        </div>

    </nav>
  );
}

export default Navbar;
