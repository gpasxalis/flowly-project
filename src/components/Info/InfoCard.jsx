import {
    Globe,
    Mail,
    MessageCircle,
    Phone,
    Instagram,
    Facebook,
    User,
} from "lucide-react";

import { profile } from "@/data/profile";
import InfoCardItem from "./InfoCardItem";
import SocialIconButton from "./SocialIconButton";
import { Badge, Card } from "@/components/UI";

const ICONS = {
    Globe,
    Mail,
    MessageCircle,
    Phone,
    Instagram,
    Facebook,
};

export default function InfoCard() {
    const profileInfo = profile.infoCard;

    const infoItems = profileInfo.infoItems || [];
    const socialItems = profileInfo.socialItems || [];

    return (
        <Card
            className="shadow-lg"
            innerClassName="p-5 h-full w-full"
            as="section"
        >
            <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-2">
                    <Badge>{profileInfo.badge}</Badge>
                    <h4 className="text-lg text-web-black/90 dark:text-white/90 font-semibold">
                        {profileInfo.title}
                    </h4>
                </div>

                <div
                    className="p-3 flex justify-center rounded-2xl bg-white/70 dark:bg-white/10 border border-gray-400/30 text-web-black/70 dark:text-white/70 font-semibold items-center gap-2 shadow-xs"
                    aria-hidden="true"
                >
                    <User size={18} />
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3">
                {infoItems.map((item) => (
                    <InfoCardItem
                        key={item.href}
                        item={item}
                        Icon={ICONS[item.icon]}
                    />
                ))}
            </div>

            <div className="mt-5 rounded-2xl border border-indigo-600 dark:border-web-black bg-indigo-200 dark:bg-web-black backdrop-blur-md p-4">
                <h4 className="text-xs font-semibold tracking-wide text-web-black/90 dark:text-white/80">
                    {profileInfo.socialTitle}
                </h4>

                <div className="mt-3 flex items-center gap-3">
                    {socialItems.map((item) => (
                        <SocialIconButton
                            key={item.href}
                            item={item}
                            Icon={ICONS[item.icon]}
                        />
                    ))}

                    <div className="ml-auto text-xs text-web-black/60 dark:text-white/60 leading-tight">
                        <h4 className="font-semibold text-web-black/90 dark:text-white/80">
                            {profileInfo.footerRight?.name}
                        </h4>
                        <div className="wrap-break-word">
                            {profileInfo.footerRight?.handle}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
