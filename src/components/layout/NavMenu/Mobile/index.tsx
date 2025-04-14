"use client";

import { IconCloseMobileMenu, IconOpenMobileMenu } from "@/app.modules";
import { CardsContent } from "@/app/(home)/components/Card/mural-cards";
import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import PageIcon from "@/components/Ui/Icons/PageIcon";
import { useDeviceContext } from "@/hooks/useDeviceContext";
import { useState } from "react";

export default function NavMenuMobile() {

    const { isMobile } = useDeviceContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleMenu() {
        setIsOpen(!isOpen)
    }

    const art = {
        container: "art:w:full art:max-w:30 art:h:03",
        box: "art:w:full art:h:03 art:fixed art:m-b:2xl",
        nav: "art:full art:flex art:align-items:center art:justify-content:center art:p:sm",
        content: "art:w:full art:max-w:30 art:bg:white-01 art:border:solid art:border:white-03 art:border:thin art:border-rd:lg art:p:base art:flex art:align-items:center art:justify-content:between",
    }

    const menus = CardsContent;

    /**
     * TODO
     * [x] - Adicionar botão para abrir o menu
     * [x] - Fazer o menu aberto
     * [x] - Adicionar as classes ao Art CSS
     * [] - Escrever a tela de aviso "em construção..." para as partes não finalizadas
     * [] - Refatorar essa bagunça como componentes
    */

    return (
        <>
            {
                isMobile ?
                    (
                        <>
                            {
                                isOpen ?
                                    (
                                        <>
                                            <div className="art:w:device art:h:device art:fixed art:top:0 art:bg:white-02 art:p:base art:flex art:col art:gap:base">
                                                <div className="art:flex art:justify-content:between">
                                                    <div className="art:flex art:row art:gap:sm ">
                                                        <LogoMacHub size={50} />
                                                        <h1 className="art:font:base art:font:medium art:m-t:sm">Mac Hub</h1>
                                                    </div>
                                                    <button onClick={handleMenu} className="art:p:sm art:border-rd:base art:flex art:font:black-01">
                                                        <IconCloseMobileMenu size={20} />
                                                    </button>
                                                </div>

                                                <nav className="art:h:full art:overflow:auto art:flex art:col art:justify-content:start art:align-items:center">
                                                    <ul className="art:flex art:col art:gap:base">
                                                        {
                                                            menus.map((menu, index) => (
                                                                <li key={index} className="art:border-b:solid art:border:thin art:border:white-03 art:p:sm">
                                                                    {/* Transformar isso em um componente reutilizavel para ambos os paineis */}
                                                                    <a href={menu.link}>
                                                                        <button className="art:font:capitalize art:font:base art:flex art:row art:gap:sm art:align-items:center art:font:black-01 art:hover:bg:none art:hover:font:white-01">
                                                                            <PageIcon name={menu.icon} size={15} color={menu.color} />
                                                                            {menu.title}
                                                                        </button>
                                                                    </a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </nav>

                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <footer className={art.container}>
                                                <div className={art.box} style={{ "bottom": "0", "left": "0" }}>
                                                    <nav className={art.nav}>
                                                        <ul className={art.content}>
                                                            {
                                                                menus.slice(0, 4).map((menu, index) => (
                                                                    <li key={index}>
                                                                        <a href={menu.link} target={menu.target}>
                                                                            <button className="art:bg:white-01 art:hover:bg:white-02">
                                                                                <PageIcon name={menu.icon} size={20} color={menu.color} />
                                                                            </button>
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                            <li>
                                                                <button className="art:w:full art:bg:white-01 art:font:black-01 art:hover:bg:white-02 art:hover:font:black-01"
                                                                    style={{ "width": "2.2rem", "height": "2.2rem" }}
                                                                    onClick={handleMenu}
                                                                >
                                                                    <IconOpenMobileMenu size={20} />
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </footer>
                                        </>
                                    )
                            }
                        </>
                    )
                    :
                    (
                        <>
                        </>
                    )
            }
        </>
    );
}