import {
    ProfileBody,
    ProfileHeader,
    ActionButtons,
    About,
} from "@/components/Hero";

import { Card } from "@/components/UI";

export default function Profile() {
    return (
        <section className="flex flex-col justify-between gap-4">
            <Card
                className="shadow-lg"
                innerClassName="flex flex-col px-5 py-5 gap-5 h-full w-full border-0"
            >
                <ProfileHeader />

                <ProfileBody />

                <ActionButtons />
            </Card>

            <About />
        </section>
    );
}
