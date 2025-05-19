"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    const stored = localStorage.getItem("theme");
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (stored === "dark" || (!stored && userPrefersDark)) {
      classList.add("dark");
      setIsDark(true);
    } else {
      classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const classList = document.documentElement.classList;
    if (classList.contains("dark")) {
      classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <span className="w-5 h-5 text-yellow-400">Dark</span>
      ) : (
        <span className="w-5 h-5 text-gray-800">Light</span>
      )}
    </button>
  );
}
