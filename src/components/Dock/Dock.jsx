import Link from "next/link";
import {
    Home,
    Info,
    Briefcase,
    Hammer,
    Sun,
    Phone,
    Mail,
    QrCode,
    Share2,
    UserPlus,
} from "lucide-react";

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

export default function Dock() {
    return (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-1 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                        >
                            <Icon
                                size={16}
                                className="opacity-80 group-hover:opacity-100"
                            />
                            <span className="hidden sm:block text-[9px]">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}

                <Link
                    href="./vcard.vcf"
                    download
                    className="group flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                    <UserPlus
                        size={16}
                        className="opacity-80 group-hover:opacity-100"
                    />
                    <span className="hidden sm:block text-[9px]">Επαφή</span>
                </Link>

                {/* Theme icon (placeholder) */}
                <div className="mx-1 h-6 w-px bg-white/10" />

                <button
                    className="group flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    aria-label="QrCode"
                >
                    <QrCode size={16} />
                    <span className="hidden sm:block text-[9px]">QrCode</span>
                </button>

                <button
                    className="group flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    aria-label="Share"
                >
                    <Share2 size={16} />
                    <span className="hidden sm:block text-[9px]">Share</span>
                </button>

                <button
                    className="group flex flex-col items-center gap-1 rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                    aria-label="Theme"
                >
                    <Sun size={16} />
                    <span className="hidden sm:block text-[9px]">Theme</span>
                </button>
            </nav>
        </div>
    );
}
