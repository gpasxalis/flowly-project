"use client";

import { useState } from "react";
import { Phone, Mail, QrCode, Share2, UserPlus, LinkIcon } from "lucide-react";

import { QrShare } from "@/components/Features";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/UI";

import DockItem from "./DockItem";

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
                <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    {/* LINK ITEMS */}
                    {itemDock.items.map((item) => {
                        const Icon = ICONS[item.icon];

                        return (
                            <DockItem
                                key={item.href}
                                as="link"
                                href={item.href}
                                icon={Icon}
                                label={item.label}
                                ariaLabel={item.label}
                            />
                        );
                    })}

                    {/* VCARD */}
                    {itemDock.vcard?.enabled && (
                        <DockItem
                            as="link"
                            href={itemDock.vcard.href}
                            download
                            icon={UserPlus}
                            label={itemDock.vcard.label}
                            ariaLabel={itemDock.vcard.label}
                        />
                    )}

                    {/* Divider */}
                    <div className="mx-1 h-6 w-px bg-web-black/15 dark:bg-white/10" />

                    {/* QR */}
                    <DockItem
                        as="button"
                        onClick={() => setOpen(true)}
                        icon={QrCode}
                        label={itemDock.qr.label}
                        ariaLabel={itemDock.qr.label}
                    />

                    {/* SHARE */}
                    <DockItem
                        as="button"
                        onClick={handleShare}
                        icon={navigator?.share ? Share2 : LinkIcon}
                        label={
                            navigator?.share
                                ? itemDock.share.labelShare
                                : itemDock.share.labelCopy
                        }
                        ariaLabel="Share"
                    />

                    {/* THEME */}
                    <ThemeToggle />
                </nav>
            </div>
        </>
    );
}
