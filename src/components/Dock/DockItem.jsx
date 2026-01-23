"use client";

import Link from "next/link";

const baseClasses =
    "cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm " +
    "text-web-black/80 dark:text-white/70 transition-all duration-200 " +
    "hover:bg-web-black/5 hover:text-web-black active:bg-web-black/5 active:text-web-black focus:bg-web-black/5 focus:text-web-black " +
    "hover:dark:bg-white/10 hover:dark:text-white active:dark:bg-white/10 active:dark:text-white focus:dark:bg-white/10 focus:dark:text-white";

export default function DockItem({
    as = "link", // "link" | "button"
    href,
    download,
    target,
    rel,
    onClick,
    ariaLabel,
    title,
    icon: Icon,
    label,
}) {
    const Label = <span className="hidden sm:block text-[9px]">{label}</span>;

    const Content = (
        <>
            {Icon ? <Icon size={16} className="opacity-80" /> : null}
            {label ? Label : null}
        </>
    );

    if (as === "button") {
        return (
            <button
                type="button"
                className={baseClasses}
                aria-label={ariaLabel || label}
                title={title || label}
                onClick={onClick}
            >
                {Content}
            </button>
        );
    }

    return (
        <Link
            href={href || "#"}
            className={baseClasses}
            aria-label={ariaLabel || label}
            title={title || label}
            download={download}
            target={target}
            rel={rel}
        >
            {Content}
        </Link>
    );
}
