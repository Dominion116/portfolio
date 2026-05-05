"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme =
  | "light"
  | "dark"
  | "system"
  | "retro"
  | "cyberpunk"
  | "paper"
  | "aurora"
  | "synthwave";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: Exclude<Theme, "system">;
  setTheme: (theme: Theme) => void;
};

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_CLASSES: Exclude<Theme, "system">[] = [
  "light",
  "dark",
  "retro",
  "cyberpunk",
  "paper",
  "aurora",
  "synthwave",
];

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getSystemTheme = (): Exclude<Theme, "system"> => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyThemeClass = (theme: Theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.remove(...THEME_CLASSES);

  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  if (resolvedTheme !== "light") {
    root.classList.add(resolvedTheme);
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("system");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as
      | Theme
      | null;

    if (storedTheme) {
      setThemeState(storedTheme);
      applyThemeClass(storedTheme);
      return;
    }

    applyThemeClass("system");
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyThemeClass("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyThemeClass(nextTheme);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme: theme === "system" ? getSystemTheme() : theme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
