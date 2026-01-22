import { PhoneCall, Mail, Globe } from "lucide-react";
import Link from "next/link";

import { profile } from "@/data/profile";

export default function ActionButtons() {
    const { actions } = profile.hero;

    return (
        <div className="flex w-full justify-center gap-1">
            <Link
                className="p-3 bg-indigo-600/80 dark:bg-indigo-600/20 text-lg text-white/90 dark:text-white/70 rounded-s-lg shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3"
                title={actions.phone.title}
                href={`tel:${actions.phone.value}`}
            >
                <PhoneCall size={18} />
                <h3 className="font-normal text-white/90 dark:text-white/70 text-sm text-center">
                    {actions.phone.label}
                </h3>
            </Link>

            <Link
                className="p-3 bg-indigo-600/80 dark:bg-indigo-600/20 text-lg text-white/90 dark:text-white/70 shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3 "
                title={actions.email.title}
                href={`mailto:${actions.email.value}`}
            >
                <Mail size={18} />
                <h3 className="font-normal text-white/90 dark:text-white/70 text-sm text-center">
                    {actions.email.label}
                </h3>
            </Link>

            <Link
                className="p-3 bg-indigo-600/80 dark:bg-indigo-600/20 text-lg text-white/90 dark:text-white/70 rounded-e-lg shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3"
                title={actions.website.title}
                href={actions.website.value}
                target="_blank"
                rel="noreferrer"
                download
            >
                <Globe size={18} />
                <h3 className="font-normal text-white/90 dark:text-white/70 text-sm text-center">
                    {actions.website.label}
                </h3>
            </Link>
        </div>
    );
}
