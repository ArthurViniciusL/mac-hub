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
        "
        >
            <a>
                <Image src={logoMac}
                    alt="logomarca do mac"
                    width={100}
                />
            </a>
            <p className="art:font:black-03 art:font:semibold">
                &copy; {currentYear}
            </p>
        </footer>
    );
}