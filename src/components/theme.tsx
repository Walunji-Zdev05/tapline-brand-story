import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    try {
      if (localStorage.getItem("walutech-theme") === "dark") setTheme("dark");
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("walutech-theme", next);
    } catch {
      /* The switch still works without storage. */
    }
  }
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function ThemeSwitch() {
  const { theme, toggle } = useContext(ThemeContext);
  const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
  return (
    <Button
      variant="ghost"
      size="icon"
      className="theme-switch"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
