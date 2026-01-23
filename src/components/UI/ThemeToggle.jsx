"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { DockItem } from "@/components/Dock";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    const handleToggle = () => {
        const next = resolvedTheme === "light" ? "dark" : "light";
        setTheme(next);
    };

    // Stable fallback until mounted
    if (!mounted) {
        return (
            <DockItem
                as="button"
                onClick={() => {}}
                icon={Sun}
                label="Theme"
                ariaLabel="Theme"
            />
        );
    }

    const isLight = resolvedTheme === "light";

    return (
        <DockItem
            as="button"
            onClick={handleToggle}
            icon={isLight ? Moon : Sun}
            label="Theme"
            ariaLabel="Toggle theme"
        />
    );
}
