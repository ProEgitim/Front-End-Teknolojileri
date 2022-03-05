import { useTheme } from "../context/ThemeContext";

function Header(){
  const {theme, setTheme } = useTheme();
  return (
    <div>
      <div>Header Aktif Tema: {theme}</div>
      <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Tema Değiştir</button>
      <br />
    </div>
  )
}
export default Header;