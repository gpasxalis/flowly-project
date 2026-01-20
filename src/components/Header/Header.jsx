"use client";

import { Sparkles } from "lucide-react";
import HeaderButtons from "./HeaderButtons";
import Image from "next/image";
import QrShare from "../UI/QrShare";
import logo from "../../../public/images/logo_symbol.png";
import { useState } from "react";

export default function Header() {
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
            <header className="relative z-20 mx-auto max-w-[980px] mt-6 max-w-6xl px-4">
                <div className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl">
                    <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl">
                        {/* Left */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-gray-400/30 text-white/70">
                                {/* <Sparkles size={18} /> */}
                                <Image
                                    src={logo}
                                    alt="Profile photo"
                                    className="h-auto w-2/3 object-cover"
                                    onError="this.style.display='none'"
                                />
                            </div>

                            <div className="leading-tight">
                                <p className="text-xs uppercase tracking-wide text-white/50">
                                    Digital Card
                                </p>
                                <p className="font-header text-sm font-medium text-white/90">
                                    Dalution
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

/* Internal component */
function ActionButton({ icon: Icon, label }) {
    return (
        <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white">
            <Icon size={16} />
            <span className="hidden sm:inline">{label}</span>
        </button>
    );
}
