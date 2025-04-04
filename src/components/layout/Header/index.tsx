"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


import { IconOpenMenu } from "@/app.modules";
import NavMenuMobile from "../NavMenu/Mobile";
import { CardsContent } from "@/app/(home)/components/Card/mural-cards";
import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import ButtonNavMenu from "@/components/ButtonNavMenu";

export default function Header() {

    const [title] = useState<string>("Mural");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    function handleisOpen() {
        
    }
    

    const art = {
        header: "art:w:full art:flex art:gap:base art:flex:row art:justify-content:center",
        // headerMobile: "mobile art:w:full art:max-w:30 art:w:full art:flex art:gap:base art:flex:row art:justify-content:space-between",
        h1: "art:w:full art:max-w:30 art:border:solid art:border:white-03 art:border:thin art:border-rd:base art:p:sm art:flex art:align-items:center art:justify-content:center art:font:black-02 art:font:base art:font:semibold"
    }

    return (
        <>

            {/* <header className={art.headerMobile}>
                <LogoMacHub size={50} />
                <h1 className={art.h1}>
                    {title}
                </h1>
                <ButtonNavMenu state={isOpen} setState={handleisOpen} />
            </header> */}
            
            <header className={art.header}>
                <h1 className={art.h1}>
                    {title}
                </h1>
            </header>


            {/* {isMobile ?
                (
                    
                )
            } */}
        </>
    );
}
