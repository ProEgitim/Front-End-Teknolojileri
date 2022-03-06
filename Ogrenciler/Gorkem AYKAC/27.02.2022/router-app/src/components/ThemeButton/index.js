import React from 'react'
import { useTheme } from "../../context/ThemeContext";
const ThemeButton=()=>{
  const {theme, setTheme } = useTheme();
  return (
    <div>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>CHANGE THEME</button>
    </div>
  )
}
export default ThemeButton;
