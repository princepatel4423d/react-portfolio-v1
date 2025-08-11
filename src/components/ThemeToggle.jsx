import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label
      htmlFor="theme-toggle"
      className="relative inline-flex items-center cursor-pointer"
      aria-label="Toggle light and dark mode"
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative transition-colors duration-300">
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 flex items-center justify-center ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {theme === "dark" ? (
            <FaMoon className="text-gray-400" size={12} />
          ) : (
            <FaSun className="text-yellow-400" size={12} />
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;