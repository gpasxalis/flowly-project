"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = () => {
        onClose?.();
    };

    return (
        <div
            className="fixed inset-0 z-80 bg-black/90"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            {/* Centering wrapper */}
            <div className="flex h-dvh w-dvw items-center justify-center p-4">
                <div
                    className="flex flex-col gap-6 w-full max-w-2xl max-h-[85dvh] overflow-y-auto px-6 py-6 rounded-2xl border border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <div className="flex w-full justify-end">
                        <button
                            type="button"
                            className="text-2xl p-2 rounded-full bg-red-600 text-white/80 hover:bg-red-900 focus:bg-red-900 active:bg-red-900 transition"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X className="cursor-pointer" size={20} />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
