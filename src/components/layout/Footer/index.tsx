import Image from "next/image";

import logoMac from "@/assets/icons/logo-mac.svg";

export default function Footer() {
    // const currentYear = new Date().getFullYear();
    return (
        <footer className="
            art:flex
            art:row
            art:gap:base
            art:align-items:center
            art:justify-content:space-between

            art:bg:black:10%
            art:font:black-01
        "
        >
            <a href="https://museumaccg.org.br/" target="_blank" >
                <Image src={logoMac}
                    alt="logomarca do mac"
                    width={150}
                />
            </a>
            {/* <p className="art:font:regular art:font:lg">
                &copy; {currentYear}
            </p> */}
        </footer>
    );
}