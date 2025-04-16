"use client";

import { useState } from "react";
import OpenMenu from "./OpenMenu";
import CloseMenu from "./CloseMenu";
import { NavMenuProps } from "..";

export default function MobileMenu({ content }: NavMenuProps ) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleMenu() {
        setIsOpen(!isOpen)
    }

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