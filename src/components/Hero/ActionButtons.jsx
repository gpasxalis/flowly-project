import { PhoneCall, Mail, Globe } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
    return (
        <div className="flex w-full justify-center gap-1">
            <Link
                className="p-3 bg-indigo-600/20 text-lg text-white/70 rounded-s-lg shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3"
                title="Call Me"
                href="tel:+306978101030"
            >
                <PhoneCall size={18} />
                <h3 className="font-normal text-white/70 text-sm text-center">
                    Κλήση
                </h3>
            </Link>

            <Link
                className="p-3 bg-indigo-600/20 text-lg text-white/70 shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3 "
                title="E-mail Me"
                href="mailto:info@dalution.gr"
            >
                <Mail size={18} />
                <h3 className="font-normal text-white/70 text-sm text-center">
                    Email
                </h3>
            </Link>

            <Link
                className="p-3 bg-indigo-600/20 text-lg text-white/70 rounded-e-lg shadow-[0_3px_8px_rgba(0,0,0,0.15)] flex justify-center items-center gap-2 w-1/3"
                title="Add me to your Contacts"
                href="https://dalution.gr"
                target="_blank"
                rel="noreferrer"
                download
            >
                <Globe size={18} />
                <h3 className="font-normal text-white/70 text-sm text-center">
                    Website
                </h3>
            </Link>
        </div>
    );
};

export default ActionButtons;
