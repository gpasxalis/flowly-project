import { Info } from "lucide-react";
import Link from "next/link";

export default function SocialIconButton({ item, Icon }) {
    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="h-12 w-12 rounded-2xl bg-indigo-600/80 dark:bg-indigo-600/20 border border-white/10 flex items-center justify-center text-white/90"
            title={item.label}
        >
            {Icon ? <Icon size={18} /> : <Info size={18} />}
        </Link>
    );
}
