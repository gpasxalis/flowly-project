import { Profile } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { InfoCard } from "@/components/Info";
import { Dock } from "@/components/Dock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-4 mx-auto max-w-245 px-4 safe-bottom grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Profile />
                <InfoCard />
                <Portfolio />
            </main>
            <Footer />
            <Dock />
        </>
    );
}
