"use client";

import { useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie_notice_ack_v1";

export default function CookieNotice({
    policyHref = "/cookies",
    message = "This site uses essential cookies.",
    buttonText = "OK",
}) {
    const [visible, setVisible] = useState(() => {
        try {
            return !localStorage.getItem(STORAGE_KEY);
        } catch {
            // storage blocked → show notice
            return true;
        }
    });

    const handleOk = () => {
        try {
            localStorage.setItem(STORAGE_KEY, "1");
            document.cookie = `${STORAGE_KEY}=1; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax`;
        } catch {
            // ignore
        }

        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-x-0 bottom-5 z-9999 px-4">
            <div className="mx-auto w-full max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="h-9 w-9 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
                                <Cookie size={18} />
                            </div>

                            <p className="text-sm text-white/80 truncate">
                                {message}{" "}
                                <Link
                                    href={policyHref}
                                    className="text-white/90 underline underline-offset-4 hover:text-white"
                                >
                                    Learn more
                                </Link>
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleOk}
                            className="shrink-0 rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/15"
                            aria-label="Accept essential cookies notice"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
