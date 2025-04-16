"use client";

import { useState } from "react";

import styles from "./desktop.module.css";


import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import ButtonNavMenu from "@/components/ButtonNavMenu";
import PageIcon from "@/components//Ui/Icons/PageIcon";
import { PagesContent } from "@/utils/PagesContent";
import BtnMenu from "@/components/Ui/Buttons/BtnMenu";
import { IPagesContent } from "@/types/IPagesContent";

export interface NavMenuProps {
    state: boolean,
    setState: (state: boolean) => void,
    menus: IPagesContent[]
}

export default function DesktopMenu() {

    const menus = PagesContent;
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function handleIsOpen() {
        setIsOpen(!isOpen)
    }

    const art = {
        aside: "art:p:sm art:gap:2xl",
        nav: "art:h:full art:flex art:justify-content:start art:align-items:start",
        ul: "art:flex art:col art:gap:base",
        li: "art:border-b:solid art:border:thin art:border:white-02 art:hover:border:none",
        btnIcon: "art:p:sm art:bg:none art:hover:bg:white-02 art:border-rd:base art:ease:quick"
    }

    return (
        <>
            <aside className={`${styles.container} ${art.aside}`}>
                <div className={`${styles.top}`}>
                    <LogoMacHub size={90} />
                    <ButtonNavMenu state={isOpen} setState={handleIsOpen} />
                </div>
                {
                    isOpen ?
                        (
                            <>
                                <nav id="openMenu" className={`${art.nav} ${styles.openMenu}`}>
                                    <ul className={art.ul}>
                                        {
                                            menus.map((menu, index) => (
                                                <li key={index} title={menu.title.toLocaleLowerCase()} className={art.li}>
                                                    <BtnMenu href={menu.link} label={menu.title} slice={true} size={15} icon={menu.icon} color={menu.color} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav >
                            </>
                        )
                        :
                        (
                            <>
                                <nav id="closeMenu" className={`${art.nav} art:w:full`}>
                                    <ul className={art.ul}>
                                        {
                                            menus.map((menu, index) => (
                                                <li key={index} title={menu.title.toLocaleLowerCase()} >
                                                    <a href={menu.link} target="_blank">
                                                        <button className={art.btnIcon}>
                                                            <PageIcon name={menu.icon} color={menu.color} size={20} />
                                                        </button>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav >
                            </>
                        )
                }
            </aside >
        </>
    );
}