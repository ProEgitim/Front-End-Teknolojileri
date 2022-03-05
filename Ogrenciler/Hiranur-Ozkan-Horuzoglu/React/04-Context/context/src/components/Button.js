// import { useContext } from "react";
 import {useTheme} from "../context/ThemeContext"

function Button(){
    const {theme, setTheme} = useTheme();
    return (
        <div>
            <br />
            <div>Aktif Tema: {theme}</div>
            <br />
            <button onClick={()=> setTheme(theme === "light" ? "dark" : "light" )}>Tema Degistir</button>
        </div>
    )
}
export default Button;
