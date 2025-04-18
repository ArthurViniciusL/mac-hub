import BtnPageMenu from "@/components/Ui/Buttons/BtnPageMenu";
import { NavMenuProps } from "..";
import ToolTip from "@/components/Ui/Tooltip";

export default function OpenMenu({ content, art }: NavMenuProps) {

    return (
        <>
            <>
                <nav id="openMenu" className={art.nav} style={{ "width": "15rem" }}>
                    <ul className={art.ul}>
                        {
                            content.map((menu, index) => (
                                <li key={index} className={art.li}>
                                    <ToolTip msg={`Acessar ${menu.title}`}>
                                        <BtnPageMenu href={menu.link} label={menu.title} sliceLabel={true} iconSize={15} iconName={menu.icon} iconColor={menu.color} />
                                    </ToolTip>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </>
        </>
    );
}