"use client";

import { useEffect, useMemo, useState } from "react";
import { X, SquareArrowOutUpRight, Image as ImageIcon } from "lucide-react";

import Link from "next/link";

import { Portal } from "@/components/UI";
import { PortfolioItem } from "@/components/Portfolio";

export default function PortfolioGallery({ items = [], fallbackImage }) {
    const normalizedItems = useMemo(() => {
        return (items || []).map((it, idx) => {
            const img = it.image || fallbackImage;

            return {
                id: it.id || `${idx}`,
                title: it.title || "Sample",
                subtitle: it.subtitle || "Preview",
                image: it.image || null, // thumb (static import)
                // full image for modal (<img src="...">)
                fullSrc: it.fullSrc || img?.src || "",
                href: it.href || null,
                ariaLabel:
                    it.ariaLabel || `Open sample: ${it.title || "Sample"}`,
            };
        });
    }, [items, fallbackImage]);

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const openItem = (item) => {
        setActive(item);
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
        setActive(null);
    };

    // ESC close
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") close();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    // Lock body scroll while modal open
    useEffect(() => {
        if (!open) return;

        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [open]);

    return (
        <>
            {/* GRID */}
            <div className="grid grid-cols-2 gap-3">
                {normalizedItems.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        item={item}
                        fallbackImage={fallbackImage}
                        onOpen={openItem}
                    />
                ))}
            </div>

            {/* MODAL */}
            {open && active && (
                <Portal>
                    <div
                        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Sample preview"
                    >
                        <div
                            className="mx-auto flex h-dvh w-dvw items-center justify-center p-4"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) close();
                            }}
                        >
                            <div
                                className="w-full max-w-4xl rounded-3xl border border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Top bar */}
                                <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-white/50 dark:bg-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/10 flex items-center justify-center text-web-black/80 dark:text-white/80">
                                            <ImageIcon size={18} />
                                        </div>
                                        <div className="leading-tight">
                                            <div className="text-base font-semibold text-web-black/90 dark:text-white/90">
                                                {active.title}
                                            </div>
                                            <div className="text-xs text-web-black/50 dark:text-white/50">
                                                {active.subtitle}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white hover:text-web-black/90 focus:bg-white focus:text-web-black/90 active:bg-white active:text-web-black/90 hover:dark:bg-white/10 hover:dark:text-white focus:dark:bg-white/10 focus:dark:text-white active:dark:bg-white/10 active:dark:text-white"
                                        onClick={close}
                                        aria-label="Close preview"
                                    >
                                        <X size={16} />
                                        <span className="hidden sm:inline">
                                            Close
                                        </span>
                                    </button>
                                </div>

                                {/* Preview image */}
                                <div className="bg-white/30 dark:bg-black/30 p-4">
                                    <div className="relative mx-auto max-h-[70dvh] overflow-hidden rounded-2xl border border-white/10 bg-black/10 dark:bg-black/40">
                                        <img
                                            src={active.fullSrc}
                                            alt={active.title}
                                            className="block w-full h-auto max-h-[70dvh] object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Bottom bar */}
                                <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-white/10 bg-white/50 dark:bg-white/5">
                                    <div className="leading-tight">
                                        <div className="text-sm font-semibold text-web-black/90 dark:text-white/90">
                                            {active.title}
                                        </div>
                                        <div className="text-xs text-web-black/50 dark:text-white/50">
                                            Tap outside to close • Press Esc
                                        </div>
                                    </div>

                                    {active.href ? (
                                        <Link
                                            href={active.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white hover:text-web-black/90 focus:bg-white focus:text-web-black active:bg-white/90 active:text-web-black/90 hover:dark:bg-white/10 hover:dark:text-white focus:dark:bg-white/10 focus:dark:text-white active:dark:bg-white/10 active:dark:text-white"
                                            aria-label={`Open ${active.title}`}
                                        >
                                            <SquareArrowOutUpRight size={16} />
                                            Open
                                        </Link>
                                    ) : (
                                        <Link
                                            href="https://dalution.gr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 px-4 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white hover:text-web-black/90 focus:bg-white focus:text-web-black active:bg-white/90 active:text-web-black/90 hover:dark:bg-white/10 hover:dark:text-white focus:dark:bg-white/10 focus:dark:text-white active:dark:bg-white/10 active:dark:text-white"
                                            aria-label="Open image in new tab"
                                        >
                                            <SquareArrowOutUpRight size={16} />
                                            Dalution
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
}
