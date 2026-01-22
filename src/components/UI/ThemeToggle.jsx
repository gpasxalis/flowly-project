"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    const handleToggle = () => {
        const next = resolvedTheme === "light" ? "dark" : "light";
        setTheme(next);
    };

    // Avoid hydration mismatch: render a stable placeholder until mounted
    if (!mounted) {
        return (
            <button
                className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                aria-label="Theme"
                type="button"
            >
                <Sun size={16} className="opacity-80" />
                <span className="hidden sm:block text-[9px]">Theme</span>
            </button>
        );
    }

    const isLight = resolvedTheme === "light";

    return (
        <button
            className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-web-black/70 dark:text-white/70 transition-all duration-200 hover:bg-web-black/5 hover:text-web-black active:bg-web-black/5 active:text-web-black focus:bg-web-black/5 focus:text-web-black hover:dark:bg-white/10 hover:dark:text-white active:dark:bg-white/10 active:dark:text-white focus:dark:bg-white/10 focus:dark:text-white"
            aria-label="Theme"
            type="button"
            onClick={handleToggle}
        >
            {isLight ? (
                <>
                    <Moon size={16} />
                    <span className="hidden sm:block text-[9px]">Theme</span>
                </>
            ) : (
                <>
                    <Sun size={16} />
                    <span className="hidden sm:block text-[9px]">Theme</span>
                </>
            )}
        </button>
    );
}
