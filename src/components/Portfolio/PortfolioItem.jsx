"use client";

import Image from "next/image";
import { Expand } from "lucide-react";

export default function PortfolioItem({ item, fallbackImage, onOpen }) {
    const safeImage = item.image || fallbackImage;

    const handleImgError = (e) => {
        const btn = e.currentTarget.closest("button");
        if (btn) btn.style.display = "none";
    };

    return (
        <button
            type="button"
            className="mediaOpen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            aria-label={item.ariaLabel || `Open sample: ${item.title}`}
            data-src={item.fullSrc}
            data-title={item.title}
            onClick={() => onOpen(item)}
        >
            <Image
                src={safeImage}
                alt={item.title}
                className="h-36 w-full object-cover opacity-95 transition group-hover:scale-[1.02]"
                onError={handleImgError}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                <div className="text-xs font-semibold text-white/90 truncate">
                    {item.title}
                </div>

                <div
                    className="h-8 w-8 rounded-xl bg-white/10 border border-gray-400/30 text-white/70 backdrop-blur flex items-center justify-center"
                    aria-hidden="true"
                >
                    <Expand size={16} />
                </div>
            </div>
        </button>
    );
}
