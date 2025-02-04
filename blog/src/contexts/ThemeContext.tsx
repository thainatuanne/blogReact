import { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { light } from "../themes/light";
import { dark } from "../themes/dark";

interface ThemeContextProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
    undefined
);

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === "dark" ? dark : light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}