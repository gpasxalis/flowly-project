"use client";

import { HeaderButtons } from "@/components/Header";
import { QrShare } from "@/components/Features";
import { profile } from "@/data/profile";
import { Card } from "@/components/UI";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const headerData = profile.header;

    return (
        <>
            <QrShare isOpen={open} onClose={handleClose} />

            <header className="sticky top-4 z-50 mx-auto max-w-245 mt-6 px-4">
                <Card
                    className="bg-white/20 dark:bg-black/30"
                    innerClassName="flex items-center justify-between px-4 py-3 shadow-xl border-0"
                >
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 dark:bg-white/10 border border-indigo-500/50 dark:border-gray-400/30 text-white/70">
                            <Image
                                src={headerData.logoSrc}
                                alt="Profile photo"
                                width={40}
                                height={40}
                                className="h-auto w-2/3 object-cover"
                            />
                        </div>

                        <div className="leading-tight">
                            <p className="text-xs uppercase tracking-wide text-web-black/50 dark:text-white/50">
                                {headerData.label}
                            </p>
                            <p className="font-header text-sm font-medium text-web-black/90 dark:text-white/90">
                                {headerData.name}
                            </p>
                        </div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <HeaderButtons onOpen={handleOpen} />
                    </div>
                </Card>
            </header>
        </>
    );
}
