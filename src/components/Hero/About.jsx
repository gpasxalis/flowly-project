import { profile } from "@/data/profile";
import { Badge, Card } from "@/components/UI";
import { Sparkles } from "lucide-react";

export default function About() {
    const { about } = profile;

    return (
        <Card
            className="shadow-lg h-1/2"
            innerClassName="p-5 h-full w-full px-5 py-5 shadow-lg flex flex-col gap-4"
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-2">
                    <Badge>{about.badge}</Badge>
                    <h4 className="text-lg text-web-black/90 dark:text-white/90 font-semibold">
                        {about.title}
                    </h4>
                </div>

                <div
                    className="p-3 flex justify-center rounded-2xl bg-white/70 dark:bg-white/10 border border-gray-400/30 text-web-black/70 dark:text-white/70 font-semibold items-center gap-2 shadow-xs"
                    aria-hidden="true"
                >
                    <Sparkles size={18} />
                </div>
            </div>

            <p className="text-sm sm:text-base text-web-black/70 dark:text-white/70">
                {about.text}
            </p>
        </Card>
    );
}
