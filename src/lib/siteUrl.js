export function getSiteUrl() {
    const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
    if (fromEnv) return fromEnv.replace(/\/$/, "");
    return "http://localhost:3000";
}

export function absoluteUrl(pathname = "/") {
    const base = getSiteUrl();
    const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return `${base}${path}`;
}
