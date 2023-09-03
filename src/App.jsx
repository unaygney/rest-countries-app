import React from "react";
import { useContext } from "react";
import "./main.css";
import ThemeContext from "./context/ThemeContext";

//Layout
import Navbar from "./components/layout/Navbar";
//Components
import SearchBar from "./components/SearchBar";
function App() {
  const { theme, setTheme } = useContext(ThemeContext);


  
  return (
    <>
<Navbar />
<SearchBar />
    </>
  );
}

export default App;
