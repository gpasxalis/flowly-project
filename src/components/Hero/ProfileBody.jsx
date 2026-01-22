import { profile } from "@/data/profile";

export default function ProfileBody() {
    const lines = profile?.hero?.body?.lines || [];

    if (!lines.length) return null;

    return (
        <div className="rounded-md py-3 space-y-1">
            {lines.map((line, index) => (
                <p
                    key={index}
                    className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-web-black/80 dark:text-white/90"
                >
                    {line}
                </p>
            ))}
        </div>
    );
}
