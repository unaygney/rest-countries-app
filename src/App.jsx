import React from "react";
import { useContext } from "react";
import "./main.css";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);


  
  return (
    <>
<Navbar />
    </>
  );
}

export default App;
