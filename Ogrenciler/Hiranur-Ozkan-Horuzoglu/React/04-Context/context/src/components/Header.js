import { useTheme } from "../context/ThemeContext";

function Header(){
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <br />
            <div> Header Aktif Tema: {theme}</div>
            <br />
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light" )}>Tema Degistir</button>
            <br />
        </div>
    )
}
export default Header;
