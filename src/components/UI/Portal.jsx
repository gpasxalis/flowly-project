"use client";

import { createPortal } from "react-dom";
import { useSyncExternalStore } from "react";

function subscribe() {
    return () => {};
}
function getSnapshot() {
    return true;
}
function getServerSnapshot() {
    return false;
}

export default function Portal({ children }) {
    const isClient = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );
    if (!isClient) return null;
    return createPortal(children, document.body);
}
