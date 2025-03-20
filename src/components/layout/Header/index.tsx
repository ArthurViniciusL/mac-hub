"use client";

import Image from "next/image";
import { useState } from "react";

import appLogo from "@/assets/icons/app-logo/mac_hub.svg";
import { IconOpenMenu } from "@/app.modules";

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
            "
            >
                <div className="
                    art:flex 
                    art:row 
                    art:gap:base 
                    art:align-items:flex-start
                "
                >
                    <Image className=""
                        src={appLogo}
                        alt=""
                        height={90}
                    />
                    <h1 className="art:font:2xl art:font:bold">{title}</h1>
                </div>
                {
                    menu ?
                        <button className="art:bg:none art:p:sm art:font:black-01 art:hover:bg:none art:hover:font:black-01"> <IconOpenMenu className="" /> </button>
                        :
                        <></>
                }
            </header>
        </>
    );
}
