import { createContext , useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const [theme , setTheme] = useState(false)

 return (
 <ThemeContext.Provider value={{theme , setTheme}}> 
 {children}
 </ThemeContext.Provider>

 )}

 export default ThemeContext