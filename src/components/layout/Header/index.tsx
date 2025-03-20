"use client";

import Image from "next/image";
import { useState } from "react";

import appLogo from "@/assets/icons/app-logo/mac_hub.svg";

export default function Header() {
    const [title] = useState<string>("Mural");
    const [menu] = useState<boolean>(true);
    return (
        <>
            <header className="
                art:w:full 
                art:flex 
                art:row 
                art:gap:base 
                art:justify-content:space-between
                art:p:base 
            "
            >
                <div className="
                    art:flex 
                    art:row 
                    art:gap:base 
                    art:justify-content:flex-start
                "
                >
                    <Image className=""
                        src={appLogo}
                        alt=""
                        height={150}
                    />
                    <h1 className="art:font:2xl art:font:bold">{title}</h1>
                </div>
                {
                    menu ?
                        <button> +++ </button>
                        :
                        <></>
                }
            </header>
        </>
    );
}
