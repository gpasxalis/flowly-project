import Modal from "./Modal";
import { usePathname } from "next/navigation";
import QRCode from "react-qr-code";

export default function QrShare(props) {
    const url = usePathname();

    return (
        <Modal onClose={props.onClose} isOpen={props.isOpen}>
            <div className="flex h-max w-full justify-center">
                <div className="bg-white p-3 rounded-md">
                    <QRCode value={url} />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-white/90 text-center">
                    Scan the QR Code
                </h2>
                <p className="text-base text-white/60 text-center">
                    to view my Business Card on another device
                </p>
            </div>
        </Modal>
    );
}
