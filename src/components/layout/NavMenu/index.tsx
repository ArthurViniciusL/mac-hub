"use client";

import { useEffect, useState } from "react";

import NavMenuDesktop from "./desktop";
import { CardsContent } from "@/app/(home)/components/Card/mural-cards";



export interface NavMenuProps {
    state: boolean,
    setSate: (state: boolean) => void,
    content: {
        icon: string,
        title: string,
        color: string,
        link: string
    }[]
}

export default function NavMenu() {

    const menus = CardsContent;
    const [isClose, setIsClose] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() { setIsMobile(window.innerWidth <= 800); }
        window.addEventListener("resize", handleResize);
        // Limpeza do evento ao desmontar
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleIsClose() {
        setIsClose(!isClose);
    }

    return (
        <>
            <NavMenuDesktop content={menus} state={isClose} setSate={handleIsClose} />
        </>
    );
}