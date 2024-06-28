import { createContext, useState, useMemo, useEffect } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const changeThemeHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

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
