import { Inter, Roboto } from "next/font/google";
import "./globals.css";

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
    title: "Dalution | Digital Business Card by Flowly",
    description: "Dalution Digital Business Card - a Flowly project",
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
