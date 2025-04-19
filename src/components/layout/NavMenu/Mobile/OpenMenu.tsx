import { IconCloseMobileMenu } from "@/app.modules";
import BugReport from "@/components/BugReport";
import BtnPageMenu from "@/components/Ui/Buttons/BtnPageMenu";
import LogoMacHub from "@/components/Ui/Icons/LogoMacHub";
import { NavMenuProps } from "..";

export default function OpenMenu({ content, setPainelState }: NavMenuProps) {
    
    const art = {
        container:"art:w:device art:h:device art:fixed art:top:0 art:bg:white-02 art:p:base art:flex art:col art:gap:base",
        box_top:"art:flex art:justify-content:between",
        box_nav:"art:h:full art:overflow:auto art:flex art:col art:justify-content:start art:align-items:center",
        content_ul:"art:flex art:col art:gap:base",
        btn_close:"art:bg:none art:font:black-01"
    }

    return (
        <>
            <main className={art.container} style={{"zIndex":"200"}}>
                <div className={art.box_top}>
                    <div className="art:flex art:row art:gap:sm">
                        <LogoMacHub size={50} />
                        <h1 className="art:font:base art:font:medium art:m-t:sm">Mac Hub</h1>
                    </div>
                    <button onClick={setPainelState} className={art.btn_close}>
                        <IconCloseMobileMenu size={20} />
                    </button>
                </div>

                <nav className={art.box_nav}>
                    <ul className={art.content_ul}>
                        {
                            content.map((menu, index) => (
                                <li key={index} className="art:p:sm">
                                    <BtnPageMenu href={menu.link} label={menu.title} iconSize={15} iconName={menu.icon} iconColor={menu.color} />
                                </li>
                            ))
                        }
                        <BugReport isOpen={true} />
                    </ul>
                </nav>

            </main>
        </>
    )
}