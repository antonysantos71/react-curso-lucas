import { ThemeProvider } from "@mui/material";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DarkTheme, LightTheme } from "../themes";

interface IThemeContextProps {
  themeName: "dark" | "light";
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextProps);

interface IThemeProviderProps {
  children: React.ReactNode;
}

const [themeName, setThemeName] = useState<"dark" | "light">("light");

const toggleTheme = useCallback(() => {
  setThemeName(themeName === "dark" ? "light" : "dark");
}, []);

const theme = useMemo(() => {
  return themeName === "dark" ? DarkTheme : LightTheme;
}, []);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
