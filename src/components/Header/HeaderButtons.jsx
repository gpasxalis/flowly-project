"use client";

import { Share2, QrCode, LinkIcon } from "lucide-react";

export default function HeaderButtons(props) {
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

    return (
        <>
            <button
                onClick={handleShare}
                className="cursor-pointer flex items-center gap-2 rounded-full border border-gray-400/30 dark:border-white/10 bg-white/40 dark:bg-white/5 px-3 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white/60 active:bg-white/60 focus:bg-white/60 hover:dark:bg-white/10 hover:dark:text-white active:dark:bg-white/10 active:dark:text-white focus:dark:bg-white/10 focus:dark:text-white"
            >
                {navigator?.share ? (
                    <>
                        <Share2 size={16} />
                        <span className="hidden sm:inline">Share</span>
                    </>
                ) : (
                    <>
                        <LinkIcon size={16} />
                        <span className="hidden sm:inline">Copy Url</span>
                    </>
                )}
            </button>
            <button
                onClick={props.onOpen}
                className="cursor-pointer flex items-center gap-2 rounded-full border border-gray-400/30 dark:border-white/10 bg-white/40 dark:bg-white/5 px-3 py-2 text-sm text-web-black/80 dark:text-white/80 transition hover:bg-white/60 active:bg-white/60 focus:bg-white/60 hover:dark:bg-white/10 hover:dark:text-white active:dark:bg-white/10 active:dark:text-white focus:dark:bg-white/10 focus:dark:text-white"
            >
                <QrCode size={16} />
                <span className="hidden sm:inline">QrCode</span>
            </button>
        </>
    );
}
