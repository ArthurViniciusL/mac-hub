import styles from "@/components/layout/NavMenu/NavMenu.module.css";
;
import { NavMenuProps } from "..";
import PageIcon from "@/components/PageIcon";
import NavMenuHeader from "./header";
import AppRoutes from "@/app.routes";

export default function NavMenuDesktop({state, setSate, content}:NavMenuProps) {
    return (
        <>
            <aside className={`${styles.container} art:bg:white-02  art:p:sm art:gap:2xl art:border-r:solid art:border:thin art:border:white-03`}>
                <NavMenuHeader state={state} setState={setSate} />
                {
                    state ?
                        (
                            <nav className="art:h:full">
                                <ul className="art:flex art:flex:col art:gap:base">
                                    <li title="" className="art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none">
                                        <a href={AppRoutes.home}>
                                            <button className={styles.btn}>
                                                <PageIcon name="IconMural" color="black-01" size={20} />
                                            </button>
                                        </a>
                                    </li>
                                    {
                                        content.map((menu, index) => (
                                            <li key={index} title={menu.title.toLocaleLowerCase()} className="art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none">
                                                <a href={menu.link} className="" target="_blank">
                                                    <button className={styles.btn}>
                                                        <PageIcon name={menu.icon} color={menu.color} size={20} />
                                                    </button>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        )
                        :
                        (
                            <nav className={`${styles.content}`}>
                                <ul className="art:flex art:flex:col art:gap:base">
                                    <li title="" className="art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none">
                                        <a href={AppRoutes.home}>
                                            <button className={styles.btn}>
                                                <PageIcon name="IconMural" color="black-01" size={20} />
                                                Mural
                                            </button>
                                        </a>
                                    </li>
                                    {
                                        content.map((menu, index) => (
                                            <li key={index} title={menu.title.toLocaleLowerCase()} className="art:border-b:solid art:border:thin art:border:white-03 art:hover:border:none">
                                                <a href={menu.link} className="" target="_blank">
                                                    <button className={styles.btn}>
                                                        <PageIcon name={menu.icon} color={menu.color} size={20} />
                                                        {
                                                            menu.title.length > 18
                                                                ?
                                                                (
                                                                    <>
                                                                        {menu.title.slice(0, 18)}...
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
                            </nav>
                        )
                }
            </aside >
        </>
    );
}