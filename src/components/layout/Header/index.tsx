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
                    art:justify-content:flex-start
                "
                >
                    <Image className=""
                        src={appLogo}
                        alt=""
                        height={100}
                    />
                    <h1 className="art:font:2xl art:font:bold">{title}</h1>
                </div>
                {
                    menu ?
                        <button className="art:p:sm art:font:blue-01 art:hover:bg:blue-01 art:hover:font:white-01"> <IconOpenMenu className="" /> </button>
                        :
                        <></>
                }
            </header>
        </>
    );
}
