"use client";

import { HeaderButtons } from "@/components/Header";
import { QrShare } from "@/components/Features";
import { profile } from "@/data/profile";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const { header } = profile;

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <QrShare isOpen={open} onClose={handleClose} />

            <header className="sticky top-4 z-50 mx-auto max-w-245 mt-6 px-4">
                <div className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl">
                    <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl">
                        {/* Left */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-gray-400/30 text-white/70">
                                <Image
                                    src={header.logoSrc}
                                    alt={`${header.name} logo`}
                                    width={40}
                                    height={40}
                                    className="h-auto w-2/3 object-cover"
                                />
                            </div>

                            <div className="leading-tight">
                                <p className="text-xs uppercase tracking-wide text-white/50">
                                    Digital Card
                                </p>
                                <p className="font-header text-sm font-medium text-white/90">
                                    {header.name}
                                </p>
                            </div>
                        </div>

                        {/* Right actions */}
                        <div className="flex items-center gap-2">
                            <HeaderButtons onOpen={handleOpen} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
