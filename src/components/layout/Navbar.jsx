import React, { useContext, useEffect } from "react";
//SVG
import ThemeLogo from "../../assets/ThemeLogo.jsx";
import ThemeContext from "../../context/ThemeContext.jsx";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark", !theme);
}, [theme])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="site-title">
          <h1 className="title">Where in the world?</h1>
        </div>

        <div onClick={() => setTheme(!theme)} className="theme-container">
          <ThemeLogo />
          <h3 className="theme-title">{theme ? "Light Mode" : "Dark Mode"}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
