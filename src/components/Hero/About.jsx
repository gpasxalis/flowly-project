import ActionButtons from "./ActionButtons";
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";

export default function About() {
    return (
        <div className="bg-black/10 border border-gray-400/30 border-t-gray-400/60 rounded-2xl shadow-lg h-1/2">
            <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl p-5 h-full w-full px-5 py-5 shadow-lg">
                <h3 className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-white/90 font-semibold">
                    Σχετικά
                </h3>
                <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-white/70">
                    Στην Dalution κατασκευάζουμε ξεχωριστές ιστοσελίδες που
                    είναι γρήγορες, λειτουργικές και κυρίως ιστοσελίδες που
                    προσφέρουν ουσιαστικά αποτελέσματα στην επιχείρησή σας.
                </p>
            </div>
        </div>
    );
}
