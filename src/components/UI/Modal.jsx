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
                    className="relative w-full max-w-2xl max-h-[85dvh] overflow-y-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.45)] px-4 py-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <div className="flex w-full justify-end">
                        <button
                            type="button"
                            className="text-4xl text-red-400 hover:text-red-300 transition"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                            <X className="cursor-pointer" />
                        </button>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
