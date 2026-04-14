"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function getNextTheme(current: Theme): Theme {
  return current === "dark" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "dark";
    }
    return document.documentElement.dataset.theme === "light" ? "light" : "dark";
  });

  const onToggle = () => {
    const nextTheme = getNextTheme(theme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-secondary hover:text-foreground md:px-3"
      aria-label="Toggle theme"
    >
      <span aria-hidden>{theme === "dark" ? "☀" : "☾"}</span>
      <span className="hidden md:inline">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
