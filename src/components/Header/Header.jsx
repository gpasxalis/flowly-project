import Link from "next/link";
import { Sparkles, Share2, QrCode, KeyRound } from "lucide-react";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
    return (
        <header className="relative z-20 mx-auto max-w-[980px] mt-6 max-w-6xl px-4">
            <div className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl">
                <div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-xl px-4 py-3 shadow-xl">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-gray-400/30 text-white/70">
                            <Sparkles size={18} />
                        </div>

                        <div className="leading-tight">
                            <p className="text-xs uppercase tracking-wide text-white/50">
                                Digital Card
                            </p>
                            <p className="text-sm font-medium text-white">
                                Dalution
                            </p>
                        </div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <HeaderButtons />
                    </div>
                </div>
            </div>
        </header>
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
