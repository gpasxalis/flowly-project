import Image from "next/image";

import logo from "../../../public/images/logo.png";
import epapanikolaou from "../../../public/images/epapanikolaou-website.jpg";
import karasakalidis from "../../../public/images/karasakalidis-website.jpg";
import { GalleryThumbnails, Expand } from "lucide-react";

export default function Portfolio() {
    return (
        <section className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <div className="text-xs uppercase tracking-widest text-white/70">
                            Portfolio
                        </div>
                        <div className="font-head text-xl text-white/90">
                            Samples
                        </div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-white/10 border border-gray-400/30 text-white/70 flex items-center justify-center">
                        <GalleryThumbnails size={18} />
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                        className="mediaOpen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        data-src="../../../public/images/epapanikolaou-website.jpg"
                        data-title="epapanikolaou website"
                    >
                        <Image
                            src={epapanikolaou}
                            alt="epapanikolaou.gr"
                            className="h-36 w-full object-cover opacity-95 group-hover:scale-[1.02] transition"
                            onError="this.closest('button').style.display='none'"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                            <div className="text-xs font-semibold text-white/90 truncate">
                                epapanikolaou.gr
                            </div>
                            <div className="h-8 w-8 rounded-xl bg-white/10 border border-gray-400/30 text-white/70 backdrop-blur flex items-center justify-center">
                                <Expand size={16} />
                            </div>
                        </div>
                    </button>
                    <button
                        className="mediaOpen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        data-src="./media/realism1.jpeg"
                        data-title="Realism"
                    >
                        <Image
                            src={karasakalidis}
                            alt="Realism"
                            className="h-36 w-full object-cover opacity-95 group-hover:scale-[1.02] transition"
                            onError="this.closest('button').style.display='none'"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                            <div className="text-xs font-semibold text-white/90 truncate">
                                Realism
                            </div>
                            <div className="h-8 w-8 rounded-xl bg-white/10 border border-gray-400/30 text-white/70 backdrop-blur flex items-center justify-center">
                                <Expand size={16} />
                            </div>
                        </div>
                    </button>
                    <button
                        className="mediaOpen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        data-src="./media/realism2.jpeg"
                        data-title="Realism"
                    >
                        <Image
                            src={logo}
                            alt="Realism"
                            className="h-36 w-full object-cover opacity-95 group-hover:scale-[1.02] transition"
                            onError="this.closest('button').style.display='none'"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                            <div className="text-xs font-semibold text-white/90 truncate">
                                Realism
                            </div>
                            <div className="h-8 w-8 rounded-xl bg-white/10 border border-gray-400/30 text-white/70 backdrop-blur flex items-center justify-center">
                                <Expand size={16} />
                            </div>
                        </div>
                    </button>
                    <button
                        className="mediaOpen group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        data-src="./media/realism3.jpeg"
                        data-title="Realism"
                    >
                        <Image
                            src={logo}
                            alt="Realism"
                            className="h-36 w-full object-cover opacity-95 group-hover:scale-[1.02] transition"
                            onError="this.closest('button').style.display='none'"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                            <div className="text-xs font-semibold text-white/90 truncate">
                                Realism
                            </div>
                            <div className="h-8 w-8 rounded-xl bg-white/10 border border-gray-400/30 text-white/70 backdrop-blur flex items-center justify-center">
                                <Expand size={16} />
                            </div>
                        </div>
                    </button>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3 text-sm text-white/70">
                    Tap a sample to view full-screen.
                </div>
            </div>
        </section>
    );
}
