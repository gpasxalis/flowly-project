import { GalleryThumbnails } from "lucide-react";
import { PortfolioGallery } from "@/components/Portfolio";

import logo from "../../../public/brand/logo.png";
import epapanikolaou from "../../../public/portfolio/epapanikolaou-website.jpg";
import karasakalidis from "../../../public/portfolio/karasakalidis-website.jpg";

export default function Portfolio() {
    const items = [
        {
            id: "epapanikolaou",
            title: "epapanikolaou.gr",
            subtitle: "Preview",
            image: epapanikolaou,
            fullSrc: epapanikolaou.src,
            href: "https://epapanikolaou.gr",
            ariaLabel: "Open sample: epapanikolaou.gr",
        },
        {
            id: "karasakalidis",
            title: "karasakalidisltd.com",
            subtitle: "Preview",
            image: karasakalidis,
            fullSrc: karasakalidis.src,
            href: "https://karasakalidisltd.com",
            ariaLabel: "Open sample: karasakalidisltd.com",
        },
        {
            id: "test1",
            title: "Realism",
            subtitle: "Preview",
            // fullSrc: "/media/realism2.jpeg",
            ariaLabel: "Open sample: Realism",
        },
        {
            id: "test2",
            title: "Realism",
            subtitle: "Preview",
            // fullSrc: "/media/realism3.jpeg",
            ariaLabel: "Open sample: Realism",
        },
    ];

    return (
        <section className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full flex gap-4 flex-col">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[9px] uppercase tracking-widest text-white/90 bg-indigo-600/40 backdrop-blur-xl w-fit px-2 py-1 rounded-full">
                            Portfolio
                        </h3>
                        <h4 className="text-lg text-white/90 font-semibold">
                            Samples
                        </h4>
                    </div>

                    <div
                        className="h-10 w-10 rounded-2xl bg-white/10 border border-gray-400/30 text-white/70 flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <GalleryThumbnails size={18} />
                    </div>
                </div>

                <PortfolioGallery items={items} fallbackImage={logo} />

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3 text-sm text-white/70">
                    Tap a sample to view full-screen.
                </div>
            </div>
        </section>
    );
}
