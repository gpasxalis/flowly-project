"use client";

import Link from "next/link";
import { Phone, Mail, QrCode, Share2, UserPlus, LinkIcon } from "lucide-react";
import { useState } from "react";

import { QrShare } from "@/components/Features";

const items = [
    {
        href: "tel:+306978101030",
        label: "Call",
        icon: Phone,
    },
    {
        href: "mailto:info@dalution.gr",
        label: "Email",
        icon: Mail,
    },
];

const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: "Δες αυτό το Flowly profile",
                url,
            });
            return;
        } catch {
            // user cancelled
        }
    }

    // Fallback
    await navigator.clipboard.writeText(url);
    alert("Link copied to clipboard");
};

export default function Dock() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <QrShare isOpen={open} onClose={handleClose} />
            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
                <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                            >
                                <Icon
                                    size={16}
                                    className="opacity-80 group-hover:opacity-100"
                                />
                                <span className="text-[9px]">{item.label}</span>
                            </Link>
                        );
                    })}

                    <Link
                        href="./vcard.vcf"
                        download
                        className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                    >
                        <UserPlus
                            size={16}
                            className="opacity-80 group-hover:opacity-100"
                        />
                        <span className="text-[9px]">Επαφή</span>
                    </Link>

                    {/* Theme icon (placeholder) */}
                    <div className="mx-1 h-6 w-px bg-white/10" />

                    <button
                        className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                        aria-label="QrCode"
                        onClick={handleOpen}
                    >
                        <QrCode size={16} />
                        <span className="text-[9px]">QrCode</span>
                    </button>

                    <button
                        className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                        aria-label="Share"
                        onClick={handleShare}
                    >
                        {navigator?.share ? (
                            <>
                                <Share2 size={16} />
                                <span className="text-[9px]hidden sm:block text-[9px]">
                                    Share
                                </span>
                            </>
                        ) : (
                            <>
                                <LinkIcon size={16} />
                                <span className="text-[9px]">Copy</span>
                            </>
                        )}
                    </button>
                </nav>
            </div>
        </>
    );
}
