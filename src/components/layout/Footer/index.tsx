import Image from "next/image";

import logoMac from "@/assets/icons/logo-mac.svg";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="
            art:w:full
            art:flex
            art:row
            art:gap:base
            art:align-items:center
            art:justify-content:space-between
            art:bg:white-02
            art:p:base
        "
        >
            <a>
                <Image src={logoMac}
                    alt="logomarca do mac"
                    width={100}
                />
            </a>
            <p>
                &copy; {currentYear}
            </p>
        </footer>
    );
}