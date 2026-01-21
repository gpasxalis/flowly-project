import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/brand/logo_symbol.png";

export default function Footer() {
    return (
        <footer className="relative z-10 mt-8 mx-auto max-w-245 px-4 safe-bottom">
            <div className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl">
                <div className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl mx-auto flex items-center justify-between gap-4 px-6 py-6 text-center text-sm text-white/70">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="Dalution logo" width={30} />
                        <div className="flex gap-1">
                            <span>© {new Date().getFullYear()}</span>
                            <Link
                                href="https://dalution.gr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium transition hover:text-dlt-bright-teal-blue focus:text-dlt-bright-teal-blue active:text-dlt-bright-teal-blue"
                            >
                                Dalution
                            </Link>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <Link
                            href="https://dalution.gr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium transition hover:text-dlt-bright-teal-blue focus:text-dlt-bright-teal-blue active:text-dlt-bright-teal-blue"
                        >
                            Flowly project
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
