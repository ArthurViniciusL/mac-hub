"use client";

import { useEffect, useState } from "react";
import OpenMenu from "./OpenMenu";
import CloseMenu from "./CloseMenu";
import { NavMenuProps } from "..";
import { LocalStorage } from "@/utils/Class/LocalStorage";

export default function MobileMenu({ content }: NavMenuProps ) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleMenu() {
        setIsOpen(!isOpen);
        LocalStorage.setPanelMode(!isOpen)
    }

    useEffect(() => {
        const storage = LocalStorage.getPanelMode();
        setIsOpen(storage);
    },[isOpen]);

    return (
        <>
            {
                isOpen ?
                    (
                        <>
                            <OpenMenu content={content} setPainelState={handleMenu} />
                        </>
                    )
                    :
                    (
                        <>
                            <CloseMenu content={content} setPainelState={handleMenu} />
                        </>
                    )
            }
        </>
    );
}