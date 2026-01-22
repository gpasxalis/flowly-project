import {
    Globe,
    Mail,
    MessageCircle,
    Phone,
    Instagram,
    Facebook,
} from "lucide-react";

import Link from "next/link";
import { profile } from "@/data/profile";

const ICONS = {
    Globe,
    Mail,
    MessageCircle,
    Phone,
    Instagram,
    Facebook,
};

const InfoCard = () => {
    const d = profile.infoCard;

    const infoItems = d.infoItems || [];
    const socialItems = d.socialItems || [];

    return (
        <section className="bg-white/30 dark:bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[9px] uppercase tracking-widest text-white/90 bg-indigo-600/80 dark:bg-indigo-600/40 backdrop-blur-xl w-fit px-2 py-1 rounded-full">
                        {d.badge}
                    </h3>
                    <h4 className="text-lg text-web-black/90 dark:text-white/90 font-semibold">
                        {d.title}
                    </h4>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {infoItems.map((item) => {
                        const Icon = ICONS[item.icon];

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="group rounded-2xl border border-indigo-600 dark:border-web-black bg-indigo-200 dark:bg-web-black hover:bg-indigo-700/10 backdrop-blur-md px-2 py-2 flex items-center gap-3"
                            >
                                <span className="shrink-0 h-11 w-11 rounded-2xl bg-indigo-600/80 dark:bg-indigo-600/20 border border-white/10 flex items-center justify-center">
                                    <span className="h-5 w-5 text-white/90">
                                        {Icon ? <Icon size={18} /> : null}
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
                    })}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-indigo-600/80 dark:bg-web-black backdrop-blur-md p-4">
                    <h4 className="text-xs font-semibold tracking-wide text-white/80">
                        {d.socialTitle}
                    </h4>
                    <div className="mt-3 flex items-center gap-3">
                        {socialItems.map((item) => {
                            const Icon = ICONS[item.icon];

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="h-12 w-12 rounded-2xl bg-indigo-800 dark:bg-indigo-600/20 border border-white/10 flex items-center justify-center"
                                    title={item.label}
                                >
                                    {Icon ? (
                                        <Icon
                                            size={18}
                                            className="text-white/90"
                                        />
                                    ) : null}
                                </Link>
                            );
                        })}

                        <div className="ml-auto text-xs text-white/60 leading-tight">
                            <h4 className="font-semibold text-white/80">
                                {d.footerRight?.name}
                            </h4>
                            <div className="wrap-break-word">
                                {d.footerRight?.handle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;
