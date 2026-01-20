import {
    Globe,
    Mail,
    MessageCircle,
    Phone,
    PhoneCall,
    Smartphone,
} from "lucide-react";

import Link from "next/link";

const InfoCard = () => {
    return (
        <section className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full">
                <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold tracking-wide text-white/90">
                        Επικοινωνία
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3">
                    <Link
                        href="tel:+302551112753"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Γραφείο"
                        className="group rounded-2xl border border-web-black bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <Phone size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Γραφείο
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                +302551112753{" "}
                            </span>
                        </span>
                    </Link>
                    <Link
                        href="tel:+306909059211"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Κινητό"
                        className="group rounded-2xl border border-white/10 bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <Smartphone size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Κινητό
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                +306909059211{" "}
                            </span>
                        </span>
                    </Link>
                    <Link
                        href="sms:+306978101030"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Μήνυμα"
                        className="group rounded-2xl border border-white/10 bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <MessageCircle size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Μήνυμα
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                +306978101030
                            </span>
                        </span>
                    </Link>
                    <Link
                        href="viber://chat?number=%2B306978101030"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Viber"
                        className="group rounded-2xl border border-white/10 bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <PhoneCall size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Viber
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                +306978101030
                            </span>
                        </span>
                    </Link>
                    <Link
                        href="https://dalution.gr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        className="group rounded-2xl border border-white/10 bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <Globe size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Website
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                dalution.gr
                            </span>
                        </span>
                    </Link>
                    <Link
                        href="mailto:pd@pronorth.gr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="group rounded-2xl border border-white/10 bg-web-black hover:bg-white/15 backdrop-blur-md px-3 py-3 flex items-center gap-3"
                    >
                        <span className="shrink-0 h-11 w-11 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center">
                            <span className="h-5 w-5 text-white/90">
                                <Mail size={18} />
                            </span>
                        </span>
                        <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white/90 leading-tight break-words">
                                Email
                            </span>
                            <span className="block text-xs text-white/60 leading-tight break-words">
                                info@dalution.gr{" "}
                            </span>
                        </span>
                    </Link>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-web-black backdrop-blur-md p-4">
                    <div className="text-xs font-semibold tracking-wide text-white/80">
                        Social
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                        <Link
                            href="https://facebook.com/PronorthITconsultants"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="h-12 w-12 rounded-2xl bg-[#1877F2] border border-white/10 flex items-center justify-center"
                            title="Facebook"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="white"
                                aria-hidden="true"
                            >
                                <path d="M22 12.06C22 6.504 17.523 2 12 2S2 6.504 2 12.06c0 5.02 3.657 9.184 8.438 9.88v-6.99H7.898v-2.89h2.54V9.797c0-2.51 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.563v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.244 22 17.08 22 12.06z"></path>
                            </svg>
                        </Link>

                        <Link
                            href="https://instagram.com/pronorth_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="h-12 w-12 rounded-2xl bg-white border border-white/10 flex items-center justify-center"
                            title="Instagram"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-7 w-7"
                                aria-hidden="true"
                            >
                                <defs>
                                    <radialGradient id="ig" cx="1" cy="0" r="1">
                                        <stop
                                            offset="0"
                                            stopColor="#4c63d2"
                                        ></stop>
                                        <stop
                                            offset="0.4"
                                            stopColor="#bc3081"
                                        ></stop>
                                        <stop
                                            offset="0.75"
                                            stopColor="#f47133"
                                        ></stop>
                                        <stop
                                            offset="1"
                                            stopColor="#fed576"
                                        ></stop>
                                    </radialGradient>
                                </defs>
                                <path
                                    fill="url(#ig)"
                                    d="M7.6 2.5h8.8A5.1 5.1 0 0 1 21.5 7.6v8.8a5.1 5.1 0 0 1-5.1 5.1H7.6a5.1 5.1 0 0 1-5.1-5.1V7.6A5.1 5.1 0 0 1 7.6 2.5Zm0 2A3.1 3.1 0 0 0 4.5 7.6v8.8a3.1 3.1 0 0 0 3.1 3.1h8.8a3.1 3.1 0 0 0 3.1-3.1V7.6a3.1 3.1 0 0 0-3.1-3.1H7.6Zm4.4 3.1a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.2-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                                ></path>
                            </svg>
                        </Link>

                        <div className="ml-auto text-xs text-white/60 leading-tight">
                            <div className="font-semibold text-white/80">
                                Pronorth
                            </div>
                            <div className="break-words">@pronorth_</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoCard;
