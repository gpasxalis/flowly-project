import Link from "next/link";
import { Info } from "lucide-react";

export default function InfoCardItem({ item, Icon }) {
    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group rounded-2xl border border-indigo-600 dark:border-web-black bg-indigo-200 dark:bg-web-black hover:bg-indigo-700/10 backdrop-blur-md px-2 py-2 flex items-center gap-3"
        >
            <span className="shrink-0 h-11 w-11 rounded-2xl bg-indigo-600/80 dark:bg-indigo-600/20 border border-white/10 flex items-center justify-center">
                <span className="h-5 w-5 text-white/90">
                    {Icon ? <Icon size={18} /> : <Info size={18} />}
                </span>
            </span>
            <span className="min-w-0 flex flex-col gap-0.5">
                <h4 className="text-xs font-semibold text-web-black/90 dark:text-white/90 leading-tight wrap-break-word">
                    {item.label}
                </h4>
                <p className="text-xs text-web-black/60 dark:text-white/60 leading-tight wrap-break-word">
                    {item.text}
                </p>
            </span>
        </Link>
    );
}
