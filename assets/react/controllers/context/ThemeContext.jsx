import { createContext, useState, useMemo, useEffect } from "react";

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const themeMemo = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={themeMemo}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };
