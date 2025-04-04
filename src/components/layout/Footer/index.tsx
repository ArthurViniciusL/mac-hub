// import Image from "next/image";

import LogoMac from "@/components/Ui/Icons/MacLogo";



export default function Footer() {
    // const currentYear = new Date().getFullYear();
    return (
        <footer className="
            art:w:device
            art:p:base
            art:bg:black:10%
            art:font:black-01
        "
        >
            <div className="" >
                <LogoMac />
                {/* <p className="art:font:regular art:font:lg">
                    &copy; {currentYear}
                </p> */}
            </div>
        </footer>
    );
}