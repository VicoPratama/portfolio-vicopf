import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={`absolute inset-0 w-full h-full text-amber-500 transition-all duration-300 transform ${theme === "dark" ? "rotate-90 opacity-0 scale-50" : "rotate-0 opacity-100 scale-100"
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-full h-full text-accent-blue transition-all duration-300 transform ${theme === "dark" ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"
                        }`}
                />
            </div>
        </button>
    );
};

export default ThemeToggle;
