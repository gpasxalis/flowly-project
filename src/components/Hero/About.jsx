import { profile } from "@/data/profile";

export default function About() {
    const { about } = profile;

    return (
        <div className="bg-white/30 dark:bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg h-1/2">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full px-5 py-5 shadow-lg flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[9px] uppercase tracking-widest text-white/90 bg-indigo-600/80 dark:bg-indigo-600/40 backdrop-blur-xl w-fit px-2 py-1 rounded-full">
                        {about.badge}
                    </h3>
                    <h4 className="text-lg text-web-black/90 dark:text-white/90 font-semibold">
                        {about.title}
                    </h4>
                </div>

                <p className="text-sm sm:text-base text-web-black/70 dark:text-white/70">
                    {about.text}
                </p>
            </div>
        </div>
    );
}
