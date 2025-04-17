"use client";

import { useEffect, useState } from "react";

import css from "./desktop.module.css";

import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import BtnPanel from "@/components/Ui/Buttons/BtnPanel";
import { NavMenuProps } from "..";
import OpenMenu from "./OpenMenu";
import CloseMenu from "./CloseMenu";
import { LocalStorage } from "@/utils/Class/LocalStorage";
import BugReport from "@/components/BugReport";

export default function DesktopMenu({ content }: NavMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const storage = new LocalStorage();

    function handleIsOpen() {
        storage.setPanelMode(!isOpen);
        setIsOpen(!isOpen);
    }

    useEffect(() => {

        if (!storage) {
            setIsOpen(true);
        } else {
            setIsOpen(storage.getPanelMode);
        }

    }, []);


    const art = {
        top: "art:w:full art:flex art:gap:base art:align-items:start art:justify-content:between",
        aside: "art:p:sm art:gap:2xl",
        nav: "art:overflow:auto art:h:full art:flex art:justify-content:start art:align-items:start",
        ul: "art:h:full art:flex art:col art:gap:base",
        li: "art:border-b:solid art:border:thin art:border:white-02 art:hover:border:none",
        btn_icon: "art:p:sm art:bg:none art:hover:bg:white-02 art:border-rd:base art:ease:quick"
    }

    return (
        <>
            <aside className={`${css.container} ${art.aside}`}>
                <div className={art.top} style={{ "height": "8rem" }}>
                    <div className="art:w:fit art:flex art:row art:gap:sm">
                        <LogoMacHub size={80} />
                        {
                            isOpen ? (
                                <h2 className="art:font:base art:p-t:base art:font:semibold art:font:black-03">Mac Hub</h2>

                            ) :
                                (
                                    <></>
                                )
                        }
                    </div>
                    <BtnPanel state={isOpen} setState={handleIsOpen} />

                </div>
                {
                    isOpen ?
                        (
                            <OpenMenu content={content} art={art} />
                        )
                        :
                        (
                            <CloseMenu content={content} art={art} />
                        )
                }
                <BugReport />
            </aside >
        </>
    );
}