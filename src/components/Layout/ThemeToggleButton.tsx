"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        if (!mounted) {
          return;
        }

        setTheme(isDark ? "light" : "dark");
      }}
      aria-label="Toggle color theme"
      disabled={!mounted}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md">
      <SunIcon
        size={24}
        className="absolute inset-0 m-auto -rotate-90 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
      />

      <MoonStarIcon
        size={24}
        className="absolute inset-0 m-auto -rotate-90 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
};

export default ThemeToggleButton;
