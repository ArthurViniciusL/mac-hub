import PageIcon from "@/components/Ui/Icons/PageIcon";
import { IconOpenMobileMenu } from "@/app.modules";
import { NavMenuProps } from "..";

export default function CloseMenu({ content, setPainelState }: NavMenuProps) {

    const art = {
        box: "art:w:full art:h:03 art:fixed art:m-b:2xl",
        nav: "art:full art:flex art:align-items:between art:justify-content:center art:p:sm",
        content: "art:w:full art:max-w:30 art:p:base art:bg:white-01 art:border:solid art:border:white-03 art:border:thin art:border-rd:lg art:flex art:align-items:center art:justify-content:between",
        boxLinks: "art:bg:none art:hover:none",
        btn_open:"art:bg:none art:font:black-01"
    }

    return (
        <>
            <footer className={art.box} style={{ "bottom": "0", "left": "0", "zIndex":"200" }}>
                <nav className={art.nav}>
                    <ul className={art.content}>
                        {
                            content.slice(0, 4).map((menu, index) => (
                                <li key={index}>
                                    <a href={menu.link} target={menu.target}>
                                        <button className={art.boxLinks}>
                                            <PageIcon name={menu.icon} size={20} color={menu.color} />
                                        </button>
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <button className={art.btn_open}
                                style={{ "width": "2.2rem", "height": "2.2rem" }}
                                onClick={setPainelState}
                            >
                                <IconOpenMobileMenu size={20} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}