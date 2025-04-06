"use client";

import { useState } from "react";

import styles from "./desktop.module.css";

import { CardsContent } from "@/app/(home)/components/Card/mural-cards";

import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import ButtonNavMenu from "@/components/ButtonNavMenu";
import PageIcon from "@/components//Ui/Icons/PageIcon";
import { useDeviceContext } from "@/hooks/useDeviceContext";

export interface NavMenuProps {
    state: boolean,
    setState: (state: boolean) => void,
    menus: {
        icon: string,
        title: string,
        color: string,
        link: string,
        target: string
    }[]
}

export default function NavMenu() {

    const menus = CardsContent;
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const { isMobile } = useDeviceContext();

    function handleIsOpen() {
        setIsOpen(!isOpen)
    }

    const art = {
        aside: "art:p:sm art:gap:2xl",
        nav: "art:h:full art:flex art:justi align-items:center",
        ul: "art:flex art:flex:col art:gap:base",
        li: "art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none",
        btn: "art:w:full art:cursor:pointer art:p:sm art:flex art:flex:row art:align-items:center art:border-rd:base art:bg:none art:hover:bg:white-02 art:font:black-01 art:hover:font:black-01 art:font:capitalize art:font:semibold",
    }

    return (
        <>
            {
                isMobile ?
                    (
                        <>
                        </>
                    )
                    :
                    (
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
                                                                    <a href={menu.link} target={menu.target}>
                                                                        <button className={art.btn}>
                                                                            <PageIcon name={menu.icon} color={menu.color} size={20} />
                                                                            {
                                                                                menu.title.length >= 18 ?
                                                                                    (
                                                                                        menu.title.slice(0, 18) + "..."
                                                                                    )
                                                                                    :
                                                                                    (
                                                                                        menu.title
                                                                                    )
                                                                            }
                                                                        </button>
                                                                    </a>
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
                                                                <li key={index} title={menu.title.toLocaleLowerCase()} className={art.li}>
                                                                    <a href={menu.link} target="_blank">
                                                                        <button className={art.btn}>
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
                    )
            }
        </>
    );
}