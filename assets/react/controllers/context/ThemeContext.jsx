import { createContext, useState, useMemo, useEffect } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const changeThemeHandler = () => {
        const value = theme === "light" ? "dark" : "light";
        setTheme(value);
        localStorage.setItem("theme", value);
    };

    useEffect(() => {
        setTheme(localStorage.getItem("theme"));
    }, []);

    const themeMemo = useMemo(
        () => ({
            theme,
            setTheme,
            changeThemeHandler,
        }),
        [theme, setTheme, changeThemeHandler]
    );

    return (
        <ThemeContext.Provider value={themeMemo}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };
