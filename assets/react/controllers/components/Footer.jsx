import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const { theme, changeThemeHandler } = useContext(ThemeContext);
    return (
        <footer className={theme}>
            <p>Copyrights Vince et Chris</p>
            <button onClick={changeThemeHandler}>Change Theme</button>
        </footer>
    );
}
