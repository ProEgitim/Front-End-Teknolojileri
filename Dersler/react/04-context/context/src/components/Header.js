import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header(){
  const {theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Header Aktif Tema: {theme}</div>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Tema Değiştir</button>
      <br />
    </div>
  )
}
export default Header;