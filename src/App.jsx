import React from "react";
import { useContext } from "react";
import "./main.css";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  
  return (
    <>
      <button onClick={() => (theme ? setTheme(false) : setTheme(true))}>
        Buton
      </button>
      <p>{theme ? "True" : "False"}</p>
    </>
  );
}

export default App;
