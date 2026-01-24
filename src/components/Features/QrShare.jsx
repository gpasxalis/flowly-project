"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import QRCode from "react-qr-code";
import Image from "next/image";
import { X, QrCode } from "lucide-react";

import { profile } from "@/data/profile";
import { Portal } from "@/components/UI";

export default function QrShare({ isOpen, onClose }) {
    const pathname = usePathname();

    const url = useMemo(() => {
        if (typeof window === "undefined") return pathname;
        return `${window.location.origin}${pathname}`;
    }, [pathname]);

    const profileName =
        profile?.hero?.name || profile?.header?.name || "Profile";

    // ESC close
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose?.();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    // Lock body scroll
    useEffect(() => {
        if (!isOpen) return;

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
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <Portal>
            <div
                className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
                aria-label="QR Share"
            >
                <div
                    className="mx-auto flex h-dvh w-dvw items-center justify-center p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) onClose?.();
                    }}
                >
                    <div
                        className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/90 dark:bg-black/60 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top bar */}
                        <div className="relative border-b border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3">
                            {/* Accent “app” header background */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-indigo-600/25 dark:bg-indigo-600/18 blur-3xl" />
                                <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-indigo-600/18 dark:bg-indigo-600/12 blur-3xl" />
                                <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600/80 dark:bg-indigo-600/20" />
                            </div>

                            <div className="relative flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-2xl bg-white/70 dark:bg-white/10 border border-gray-400/30 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={profile?.header?.logoSrc}
                                            alt="Logo"
                                            className="h-7 w-7 object-contain"
                                            priority
                                        />
                                    </div>

                                    <div className="leading-tight min-w-0">
                                        <div className="text-xs uppercase tracking-wide text-web-black/60 dark:text-white/60">
                                            Digital Card
                                        </div>
                                        <div className="text-base font-semibold text-web-black/90 dark:text-white/90 truncate">
                                            {profileName}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="cursor-pointer min-h-10 min-w-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white hover:text-web-black/90 focus:bg-white focus:text-web-black/90 active:bg-white active:text-web-black/90 hover:dark:bg-white/10 hover:dark:text-white focus:dark:bg-white/10 focus:dark:text-white active:dark:bg-white/10 active:dark:text-white"
                                    onClick={onClose}
                                    aria-label="Close"
                                >
                                    <X size={16} />
                                    <span className="hidden sm:inline">
                                        Close
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="bg-white/30 dark:bg-black/30 p-4">
                            {/* QR card */}
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 dark:bg-black/40 p-4">
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-indigo-600/15 dark:bg-indigo-600/12 blur-2xl" />
                                </div>

                                <div className="relative flex flex-col items-center gap-4">
                                    <div className="flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 border border-gray-400/30 px-3 py-1 text-xs font-semibold text-web-black/80 dark:text-white/80">
                                        <QrCode size={14} />
                                        QR Share
                                    </div>

                                    <div className="bg-white p-3 rounded-2xl border border-black/10 shadow-sm">
                                        <QRCode
                                            value={url}
                                            fgColor="#000000"
                                            bgColor="#ffffff"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-semibold text-web-black/90 dark:text-white/90 text-center">
                                            Scan the QR Code
                                        </h2>
                                        <p className="text-base text-web-black/60 dark:text-white/60 text-center">
                                            to view my Business Card on another
                                            device
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur px-4 py-3 text-sm text-web-black/60 dark:text-white/60 text-center">
                                Tip: You can use the Share button to share the
                                link of the card.
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="border-t border-white/10 bg-white/60 dark:bg-white/5 px-4 py-3">
                            <div className="flex items-center justify-between gap-3">
                                <div className="leading-tight">
                                    <div className="text-sm font-semibold text-web-black/90 dark:text-white/90">
                                        {profileName}
                                    </div>
                                    <div className="text-xs text-web-black/50 dark:text-white/50">
                                        Tap outside to close • Press Esc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}
