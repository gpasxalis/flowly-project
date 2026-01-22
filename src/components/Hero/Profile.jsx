import {
    ProfileBody,
    ProfileHeader,
    ActionButtons,
    About,
} from "@/components/Hero";

export default function Profile() {
    return (
        <section className="flex flex-col justify-between gap-4">
            <div className="bg-white/30 dark:bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl">
                <div className="flex flex-col rounded-2xl bg-white/10 backdrop-blur-xl px-5 py-5 gap-5 h-full w-full">
                    <ProfileHeader />

                    <ProfileBody />

                    <ActionButtons />
                </div>
            </div>
            <About />
        </section>
    );
}
