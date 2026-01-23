import { Modal } from "../UI";
import { usePathname } from "next/navigation";
import QRCode from "react-qr-code";
import Image from "next/image";

import { profile } from "@/data/profile";

export default function QrShare({ isOpen, onClose }) {
    const pathname = usePathname();

    const url =
        typeof window !== "undefined"
            ? `${window.location.origin}${pathname}`
            : pathname;

    const profileName =
        profile?.hero?.name || profile?.header?.name || "Profile";

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <div className="mx-auto w-full max-w-sm flex flex-col gap-6">
                {/* Header σαν mini profile app */}
                <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-indigo-600 dark:dark:bg-indigo-600/20 backdrop-blur px-4 py-3">
                    <div className="relative flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-white/90 dark:bg-white/10 border border-gray-400/30 flex items-center justify-center overflow-hidden">
                            <Image
                                src={profile?.header?.logoSrc}
                                alt="Logo"
                                className="h-7 w-7 object-contain"
                                priority
                            />
                        </div>

                        <div className="min-w-0 leading-tight">
                            <div className="text-xs uppercase tracking-wide text-white/75">
                                Digital Card
                            </div>
                            <div className="text-base font-semibold text-white/90 truncate">
                                {profileName}
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Card */}
                <div className="relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-indigo-600 dark:bg-indigo-600/20 backdrop-blur p-4">
                    <div className="relative flex w-full justify-center">
                        <div className="bg-white p-3 rounded-2xl border border-black/10 shadow-sm">
                            {/* QR ασπρόμαυρο */}
                            <QRCode
                                value={url}
                                fgColor="#000000"
                                bgColor="#ffffff"
                            />
                        </div>
                    </div>

                    <div className="relative mt-4 flex flex-col gap-1">
                        <h2 className="text-lg font-semibold text-white/90 text-center">
                            Scan the QR Code
                        </h2>
                        <p className="text-base text-white/75 text-center">
                            to view my Business Card on another device
                        </p>
                    </div>
                </div>

                {/* Helper footer */}
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-indigo-600 dark:bg-indigo-600/20 backdrop-blur px-4 py-3 text-sm text-white/80 text-center">
                    Tip: You can use the Share button to share the card.
                </div>
            </div>
        </Modal>
    );
}
