import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/brand/logo_symbol.png";

import { Card } from "@/components/UI";

export default function Footer() {
    return (
        <footer className="relative z-10 mt-8 mx-auto max-w-245 px-4 safe-bottom">
            <Card
                className="shadow-xl"
                innerClassName="mx-auto flex items-center justify-between gap-3 px-6 py-6 shadow-xl border-0"
            >
                <div className="flex items-center gap-3 text-web-black/70 dark:text-white/70 text-sm">
                    <Image
                        src={logo}
                        alt="Dalution logo"
                        width={26}
                        height={26}
                    />
                    <div className="flex gap-1">
                        <span>© {new Date().getFullYear()}</span>
                        <Link
                            href="https://dalution.gr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium transition hover:text-indigo-600 focus:text-indigo-600 active:text-indigo-600 hover:dark:text-dlt-bright-teal-blue focus:dark:text-dlt-bright-teal-blue active:dark:text-dlt-bright-teal-blue"
                        >
                            Dalution
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-web-black/70 dark:text-white/70">
                    <Link
                        href="https://dalution.gr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition hover:text-indigo-600 focus:text-indigo-600 active:text-indigo-600 hover:dark:text-dlt-bright-teal-blue focus:dark:text-dlt-bright-teal-blue active:dark:text-dlt-bright-teal-blue"
                    >
                        Flowly project
                    </Link>
                </div>
            </Card>
        </footer>
    );
}
