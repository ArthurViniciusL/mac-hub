"use client";

import { IconOpenMobileMenu } from "@/app.modules";
import { CardsContent } from "@/app/(home)/components/Card/mural-cards";
import PageIcon from "@/components/Ui/Icons/PageIcon";
import { useDeviceContext } from "@/hooks/useDeviceContext";

export default function NavMenuMobile() {

    const { isMobile } = useDeviceContext();

    const art = {
        container: "art:w:full art:max-w:30 art:h:03",
        box: "art:w:full art:h:03 art:fixed art:m-b:2xl",
        nav: "art:full art:flex art:align-items:center art:justify-content:center art:p:sm",
        content: "art:w:full art:max-w:30 art:bg:white-01 art:border:solid art:border:white-03 art:border:thin art:border-rd:lg art:p:base art:flex art:align-items:center art:justify-content:space-between",
    }

    const menus = CardsContent;

    /**
     * TODO
     * [x] - Adicionar botão para abrir o menu
     * [] - Fazer o menu aberto
     * [] - Adicionar as classes ao Art CSS
    */

    return (
        <>
            {
                isMobile ?
                    (
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
                                            <button className="art:w:full art:bg:white-01 art:hover:bg:white-02 art:font:blue-01 art:hover:font:black-01" style={{ "width": "2.2rem", "height": "2.2rem" }}>
                                            <IconOpenMobileMenu size={20} />
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </footer>
                    )
                    :
                    (
                        <></>
                    )
            }
        </>
    );
}