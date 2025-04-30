import PageIcon from "@/components/Ui/Icons/PageIcon";
import { IconOpenMobileMenu } from "@/modules/app.modules";
import { NavMenuProps } from "..";
import ToolTip from "@/components/Ui/Tooltip";

export default function CloseMenu({ content, setPainelState }: NavMenuProps) {

    const art = {
        box: "art:w:full art:fixed art:m-b:2xl",
        nav: "art:full art:flex art:align-items:between art:justify-content:center art:p:sm",
        content: "art:w:full art:p:base art:bg:white-01 art:border:solid art:border:white-03 art:border:thin art:border-rd:lg art:flex art:align-items:center art:justify-content:between",
        boxLinks: "art:bg:none art:hover:none",
        btn_open: "art:bg:none art:font:black-01"
    }

    return (
        <>
            <footer className={art.box} style={{ "bottom": "0", "left": "0", "zIndex": "200" }}>
                <nav className={art.nav}>
                    <ul className={art.content} style={{"maxWidth":"30rem"}}>
                        {
                            content.slice(0, 4).map((menu, index) => (
                                <li key={index}>
                                    <ToolTip msg={menu.title}>
                                        <a href={menu.link} target={menu.target}>
                                            <button className={art.boxLinks}>
                                                <PageIcon name={menu.icon} size={20} color={menu.color} />
                                            </button>
                                        </a>
                                    </ToolTip>
                                </li>
                            ))
                        }
                        <li>
                            <ToolTip msg="Abrir menu">
                                <button className={art.btn_open}
                                    style={{ "width": "2.2rem", "height": "2.2rem" }}
                                    onClick={setPainelState}
                                >
                                    <IconOpenMobileMenu size={20} />
                                </button>
                            </ToolTip>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}