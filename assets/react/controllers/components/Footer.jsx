import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const { theme, changeThemeHandler } = useContext(ThemeContext);

    return (
        <footer className={theme}>
            <p>Copyrights</p>

            <button className={theme} onClick={changeThemeHandler}>
                Change Theme
            </button>
        </footer>
    );
}
