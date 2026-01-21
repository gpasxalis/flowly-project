import Image from "next/image";
import Link from "next/link";
import { UserPlus } from "lucide-react";

import { profile } from "@/data/profile";

export default function ProfileHeader() {
    const { hero } = profile;

    return (
        <div className="relative flex items-end justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="h-20 w-20 rounded-2xl border border-white/15 bg-white/5 overflow-hidden shadow-2xl">
                        <Image
                            src={hero.image}
                            alt={`${hero.name} profile photo`}
                            width={100}
                            height={100}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {hero.status && (
                        <span
                            className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full ring-2
                            ${
                                hero.status.show
                                    ? "bg-emerald-500 ring-emerald-600"
                                    : "bg-red-500 ring-red-600"
                            }`}
                            aria-label={hero.status.label}
                        />
                    )}
                </div>

                <div className="min-w-0">
                    <h1 className="font-head text-2xl sm:text-3xl text-white/90 truncate">
                        {hero.name}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base text-white/70">
                        {hero.title}
                    </p>
                </div>
            </div>

            {hero.vcf?.enabled && (
                <div className="absolute top-0 right-0">
                    <Link
                        href={hero.vcf.href}
                        download
                        className="p-3 flex justify-center rounded-2xl bg-white/10 border border-gray-400/30 text-white/70 font-semibold items-center gap-2 shadow-xl"
                        aria-label="Add to contacts"
                    >
                        <UserPlus size={18} />
                    </Link>
                </div>
            )}
        </div>
    );
}
