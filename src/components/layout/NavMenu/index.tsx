import Image from "next/image";
import styles from "./NavMenu.module.css";

import appLogo from "@/assets/icons/app-logo/mac_hub.svg";
import { CardsContent } from "@/app/(home)/components/Card/mural-cards";
import PageIcon from "@/components/PageIcon";


export default function NavMenu() {

    const menus = CardsContent;

    // export function 

    return (
        <>
            <aside className={`${styles.container} art:bg:black:10% art:p:base art:gap:2xl`}>
                <section className={`${styles.top}`}>
                    <Image className="art:border-rd:sm"
                        src={appLogo}
                        alt=""
                        height={90}
                    />
                    <button className="art:bg:white-02 art:p:sm art:border-rd:sm">
                        oo
                    </button>
                </section>

                <section className={styles.content}>
                    <ul className="art:flex art:flex:col art:gap:base">
                        {
                            menus.map((menu, index) => (
                                <li key={index} className="art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none">
                                    <a href={menu.link} >
                                        <button className="art:w:full art:cursor:pointer art:p:sm art:flex art:flex:row art:align-items:center art:border-rd:base art:bg:none art:hover:bg:white-02 art:font:black-01 art:hover:font:black-01 art:font:capitalize art:font:semibold">
                                            <PageIcon name={menu.icon} color={menu.color} size={20} />
                                            {
                                                menu.title.length > 16
                                                    ?
                                                    (
                                                        <>
                                                            {menu.title.slice(0, 16)}...
                                                        </>
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
                </section>

                {/*  <span className={styles.span}></span> */}

            </aside>
        </>
    );
}