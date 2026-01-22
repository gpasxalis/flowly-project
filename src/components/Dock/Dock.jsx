"use client";

import Link from "next/link";
import { Phone, Mail, QrCode, Share2, UserPlus, LinkIcon } from "lucide-react";
import { useState } from "react";

import { QrShare } from "@/components/Features";
import { profile } from "@/data/profile";

const ICONS = {
    Phone,
    Mail,
    QrCode,
    Share2,
    UserPlus,
    LinkIcon,
};

export default function Dock() {
    const [open, setOpen] = useState(false);
    const itemDock = profile.dock;

    const handleShare = async () => {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    text: itemDock.share.text,
                    url,
                });
                return;
            } catch {
                // user cancelled
            }
        }

        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
    };

    return (
        <>
            <QrShare isOpen={open} onClose={() => setOpen(false)} />

            <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
                <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    {/* LINK ITEMS */}
                    {itemDock.items.map((item) => {
                        const Icon = ICONS[item.icon];

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                            >
                                {Icon && (
                                    <Icon size={16} className="opacity-80" />
                                )}
                                <span className="text-[9px]">{item.label}</span>
                            </Link>
                        );
                    })}

                    {/* VCARD */}
                    {itemDock.vcard?.enabled && (
                        <Link
                            href={itemDock.vcard.href}
                            download
                            className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                        >
                            <UserPlus size={16} className="opacity-80" />
                            <span className="text-[9px]">
                                {itemDock.vcard.label}
                            </span>
                        </Link>
                    )}

                    {/* Divider */}
                    <div className="mx-1 h-6 w-px bg-white/10" />

                    {/* QR */}
                    <button
                        className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                        aria-label={itemDock.qr.label}
                        onClick={() => setOpen(true)}
                    >
                        <QrCode size={16} />
                        <span className="text-[9px]">{itemDock.qr.label}</span>
                    </button>

                    {/* SHARE */}
                    <button
                        className="cursor-pointer flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white focus:bg-white/10 focus:text-white"
                        aria-label="Share"
                        onClick={handleShare}
                    >
                        {navigator?.share ? (
                            <>
                                <Share2 size={16} />
                                <span className="text-[9px]">
                                    {itemDock.share.labelShare}
                                </span>
                            </>
                        ) : (
                            <>
                                <LinkIcon size={16} />
                                <span className="text-[9px]">
                                    {itemDock.share.labelCopy}
                                </span>
                            </>
                        )}
                    </button>
                </nav>
            </div>
        </>
    );
}
