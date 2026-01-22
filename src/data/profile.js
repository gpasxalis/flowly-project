// Static assets (κρατάμε static imports για next/image ώστε να έχει width/height metadata)
import logo from "../../public/brand/logo.png";
import logoSymbol from "../../public/brand/logo_symbol.png";

import epapanikolaou from "../../public/portfolio/epapanikolaou-website.jpg";
import karasakalidis from "../../public/portfolio/karasakalidis-website.jpg";

export const profile = {
    /**
     * Top header
     */

    header: {
        label: "DIGITAL CARD",
        name: "Dalution",
        logoSrc: logoSymbol,
    },

    /**
     * Hero section (ProfileHeader, ProfileBody, ActionButtons)
     */

    hero: {
        name: "Dalution",
        title: "Κατασκευή Ιστοσελίδων",
        image: logo,
        status: {
            show: true,
            label: "Online",
        },
        vcf: {
            enabled: true,
            href: "/vcards/pgrammenos.vcf",
        },
        body: {
            lines: [
                "Μετατρέποντας ιδέες σε ψηφιακές λύσεις",
                "Δωρεάν Αξιολόγηση Ιστοσελίδας",
            ],
        },
        actions: {
            phone: {
                label: "Κλήση",
                title: "Call Me",
                value: "+306978101030",
            },
            email: {
                label: "Email",
                title: "E-mail Me",
                value: "info@dalution.gr",
            },
            website: {
                label: "Website",
                title: "Visit my Website",
                value: "https://dalution.gr",
            },
        },
    },

    /**
     * About card
     */

    about: {
        badge: "About",
        title: "Περίληψη",
        text: "Στην Dalution κατασκευάζουμε ξεχωριστές ιστοσελίδες που είναι γρήγορες, λειτουργικές και κυρίως ιστοσελίδες που προσφέρουν ουσιαστικά αποτελέσματα στην επιχείρησή σας.",
    },

    /**
     * Portfolio
     */
    portfolio: {
        badge: "Portfolio",
        title: "Samples",
        helperText: "Tap a sample to view full-screen.",
        fallbackImage: logo,

        items: [
            {
                id: "epapanikolaou",
                title: "epapanikolaou.gr",
                subtitle: "Preview",
                image: epapanikolaou,
                fullSrc: epapanikolaou.src,
                href: "https://epapanikolaou.gr",
                ariaLabel: "Open sample: epapanikolaou.gr",
            },
            {
                id: "karasakalidis",
                title: "karasakalidisltd.com",
                subtitle: "Preview",
                image: karasakalidis,
                fullSrc: karasakalidis.src,
                href: "https://karasakalidisltd.com",
                ariaLabel: "Open sample: karasakalidisltd.com",
            },
            {
                id: "test1",
                title: "Realism",
                subtitle: "Preview",
                // fullSrc: "/media/realism2.jpeg",
                ariaLabel: "Open sample: Realism",
            },
            {
                id: "test2",
                title: "Realism",
                subtitle: "Preview",
                // fullSrc: "/media/realism3.jpeg",
                ariaLabel: "Open sample: Realism",
            },
        ],
    },

    /**
     * Informations
     */

    infoCard: {
        badge: "Contact",
        title: "Επικοινωνία",

        infoItems: [
            {
                href: "tel:+306978101030",
                label: "Τηλέφωνο",
                text: "+306978101030",
                icon: "Phone",
            },
            {
                href: "sms:+306978101030",
                label: "Μήνυμα",
                text: "+306978101030",
                icon: "MessageCircle",
            },
            {
                href: "https://dalution.gr",
                label: "Website",
                text: "dalution.gr",
                icon: "Globe",
            },
            {
                href: "mailto:info@dalution.gr",
                label: "Email",
                text: "info@dalution.gr",
                icon: "Mail",
            },
        ],

        socialTitle: "Social",
        socialItems: [
            {
                href: "https://facebook.com/dalution.gr",
                label: "Facebook",
                icon: "Facebook",
            },
            {
                href: "https://instagram.com/dalution.gr",
                label: "Instagram",
                icon: "Instagram",
            },
        ],

        footerRight: {
            name: "Dalution",
            handle: "@dalution.gr",
        },
    },

    dock: {
        items: [
            {
                type: "link",
                href: "tel:+306978101030",
                label: "Call",
                icon: "Phone",
            },
            {
                type: "link",
                href: "mailto:info@dalution.gr",
                label: "Email",
                icon: "Mail",
            },
        ],

        vcard: {
            enabled: true,
            href: "/vcards/pgrammenos.vcf",
            label: "Επαφή",
            icon: "UserPlus",
        },

        qr: {
            label: "QrCode",
            icon: "QrCode",
        },

        share: {
            text: "Δες αυτό το Flowly profile",
            labelShare: "Share",
            labelCopy: "Copy",
            iconShare: "Share2",
            iconCopy: "LinkIcon",
        },
    },
};
