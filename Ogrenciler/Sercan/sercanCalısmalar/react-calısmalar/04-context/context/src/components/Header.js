
import {useTheme} from "../context/ThemeContext";

function Header(){
    const {theme, setTheme} = useTheme();
    return(
        <div>
        <div>Haeder Aktif Theme:{theme}</div>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Theme Change</button>
        <br />
        </div>
    )
}

export default Header;