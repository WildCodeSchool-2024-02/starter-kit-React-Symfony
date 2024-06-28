import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const { theme, changeThemeHandler } = useContext(ThemeContext);

    return (
        <footer className={theme === "dark" ? "light" : "dark"}>
            <p>Copyrights: Vince et Chris</p>

            <button
                className={theme === "dark" ? "light" : "dark"}
                onClick={changeThemeHandler}
            >
                Change Theme
            </button>
        </footer>
    );
}
