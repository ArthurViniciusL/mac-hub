"use client";
import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import { useDeviceContext } from "@/hooks/useDeviceContext";
import { useHeaderContext } from "@/hooks/useHeaderContext";


export default function Header() {

    const { title } = useHeaderContext();

    const { isMobile } = useDeviceContext();

    const art = {
        header: "art:w:full art:flex art:gap:base art:col art:justify-content:center art:align-items:center",
        h1: "art:select:none art:w:full art:max-w:30 art:border:solid art:border:white-03 art:border:thin art:border-rd:base art:p:sm art:flex art:align-items:center art:justify-content:center art:font:black-02 art:font:base art:font:semibold"
    }

    return (
        <>
            <header className={art.header}>
                {
                    isMobile ?
                        (
                            <LogoMacHub size={50} />
                        )
                        :
                        (
                            <></>
                        )
                }
                <h1 className={art.h1}>
                    {title}
                </h1>
            </header>
        </>
    );
}
