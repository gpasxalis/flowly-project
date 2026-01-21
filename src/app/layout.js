import { Inter, Roboto } from "next/font/google";
import "./globals.css";

import { getSiteUrl } from "@/lib/siteUrl";

const fontInter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

const fontRoboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: ["300", "400", "500", "700"],
    display: "swap",
});

export const metadata = {
    metadataBase: new URL(getSiteUrl()),
    title: {
        default: "Flowly | Digital cards by Dalution",
        template: "%s | Flowly",
    },
    description:
        "Premium digital business cards που συνδυάζουν design και καθαρή υλοποίηση. Powered by Dalution.",
    openGraph: {
        type: "website",
        siteName: "Flowly",
        locale: "el_GR",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "Flowly" }],
    },
    twitter: {
        card: "summary_large_image",
        images: ["/og.png"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="el">
            <body
                className={`${fontInter.variable} ${fontRoboto.variable} min-h-screen antialiased bg-stone-950 pt-4 pb-32`}
            >
                {children}
            </body>
        </html>
    );
}
