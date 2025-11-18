import React, { createContext, useContext, useState, useMemo } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "../theme";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const systemScheme = useColorScheme();
    const [mode, setMode] = useState(systemScheme || "dark"); // padrão: dark

    const theme = useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useAppTheme must be used within ThemeProvider");
    }
    return ctx;
};
