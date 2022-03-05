
import {useTheme} from "../context/ThemeContext";

function Button(){
    const {theme, setTheme} = useTheme();
    return(
        <div>
        <div>Aktif Theme:{theme}</div>
        <button onClick={()=> setTheme(theme === "light" ? "dark" : "light")}>Theme Change</button>
        </div>
    )
}

export default Button;