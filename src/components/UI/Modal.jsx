"use client";

import { X } from "lucide-react";

const Modal = ({ children, ...props }) => {
    if (!props.isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div
            className="fixed mx-auto flex flex-col w-dvw h-dvh gap-10 bg-black/90 z-100 px-4 py-2 inset-0"
            onClick={handleBackgroundClick}
        >
            <div className="flex w-full justify-end text-4xl text-red-400">
                <X className="cursor-pointer" onClick={props.onClose} />
            </div>
            {children}
        </div>
    );
};

export default Modal;
