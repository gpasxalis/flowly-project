import { GalleryThumbnails } from "lucide-react";
import { PortfolioGallery } from "@/components/Portfolio";

import { profile } from "@/data/profile";

export default function Portfolio() {
    const portfolioItems = profile.portfolio;

    return (
        <section className="bg-white/30 dark:bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full flex gap-4 flex-col">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[9px] uppercase tracking-widest text-white/90 bg-indigo-600/80 dark:bg-indigo-600/40 backdrop-blur-xl w-fit px-2 py-1 rounded-full">
                            {portfolioItems.badge}
                        </h3>
                        <h4 className="text-lg text-web-black/90 dark:text-white/90 font-semibold">
                            {portfolioItems.title}
                        </h4>
                    </div>

                    <div
                        className="h-10 w-10 rounded-2xl bg-white/70 dark:bg-white/10 border border-gray-400/30 text-web-black/70 dark:text-white/70 flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <GalleryThumbnails size={18} />
                    </div>
                </div>

                <PortfolioGallery
                    items={portfolioItems.items}
                    fallbackImage={portfolioItems.fallbackImage}
                />

                <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur px-4 py-3 text-sm text-web-black/70 dark:text-white/70">
                    {portfolioItems.helperText}
                </div>
            </div>
        </section>
    );
}
