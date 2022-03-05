import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button(){
  const {theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Aktif Tema: {theme}</div>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Tema Değiştir</button>
    </div>
  )
}
export default Button;