import Profile from "@/components/Hero/Profile";
import Portfolio from "@/components/Portfolio/Portfolio";
import InfoCard from "@/components/Info/InfoCard";
import Dock from "@/components/Dock/Dock";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-4 mx-auto max-w-[980px] px-4 safe-bottom grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Profile />
                <InfoCard />
                <Portfolio />
            </main>
            <Dock />
            <Footer />
        </>
    );
}
