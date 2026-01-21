import Image from "next/image";
import Link from "next/link";

import { UserPlus } from "lucide-react";

import logo from "../../../public/brand/logo.png";

export default function ProfileHeader() {
    return (
        <div className="relative flex items-end justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="h-20 w-20 rounded-2xl border border-white/15 bg-white/5 overflow-hidden shadow-2xl">
                        <Image
                            src={logo}
                            alt="Profile photo"
                            className="h-full w-full object-cover"
                            onError="this.style.display='none'"
                        />
                    </div>
                    <span
                        className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full
         bg-emerald-500 ring-2 ring-emerald-600"
                        aria-label="Online status"
                    ></span>
                </div>

                <div className="min-w-0">
                    <h1 className="font-head text-2xl sm:text-3xl text-white/90 truncate">
                        Dalution
                    </h1>
                    <p className="mt-1 text-sm sm:text-base text-white/70">
                        Κατασκευή Ιστοσελίδων
                    </p>
                </div>
            </div>

            <div className="absolute top-0 right-0">
                <Link
                    href="teolaf.vcf"
                    download=""
                    className="p-3 flex justify-center rounded-2xl bg-white/10 border border-gray-400/30 text-white/70 font-semibold items-center gap-2 shadow-xl"
                >
                    <UserPlus size={18} />
                </Link>
            </div>
        </div>
    );
}
