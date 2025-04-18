"use client";

import { useEffect, useState } from "react";

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
        aside: "art:w:fit art:h:device art:flex art:col art:p:sm art:gap:2xl",
        top: "art:w:full art:flex art:gap:base art:align-items:start art:justify-content:between ",
        nav: "art:overflow:auto art:scrollbar:thin art:scrollbar:white-01 art:w:full art:h:full art:flex art:justify-content:start art:align-items:start art:col art:gap:base",
        ul: "art:w:full art:h:full art:flex art:col art:gap:base art:justify-content:between",
        li: "art:border-b:solid art:border:thin art:border:white-02 art:hover:border:none"
    }

    return (
        <>
            <aside className={art.aside}>
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
                <BugReport isOpen={isOpen} />
            </aside >
        </>
    );
}