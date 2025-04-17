"use client";

import { useDeviceContext } from "@/hooks/useDeviceContext"
import DesktopMenu from "./Desktop";
import MobileMenu from "./Mobile";
import { IPagesContent } from "@/types/IPagesContent";
import { PagesContent } from "@/utils/PagesContent";

export interface NavMenuProps {
    art?: any;
    content: IPagesContent[];
    setPainelState?: () => void;
}

export default function NavMenu() {

    const { isMobile } = useDeviceContext();

    const menus = PagesContent;

    return (
        <>
            {
                isMobile ?
                    (
                        <MobileMenu content={menus} />
                    )
                    :
                    (
                        <DesktopMenu content={menus} />
                    )
            }
        </>
    )
}