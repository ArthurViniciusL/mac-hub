import css from "../Desktop/desktop.module.css";

import BtnPageMenu from "@/components/Ui/Buttons/BtnPageMenu";
import { NavMenuProps } from "..";

export default function OpenMenu({ content, art }: NavMenuProps) {

    return (
        <>
            <>
                <nav id="openMenu" className={`${art.nav} ${css.openMenu}`}>
                    <ul className={art.ul}>
                        {
                            content.map((menu, index) => (
                                <li key={index} title={menu.title.toLocaleLowerCase()} className={art.li}>
                                    <BtnPageMenu href={menu.link} label={menu.title} sliceLabel={true} iconSize={15} iconName={menu.icon} iconColor={menu.color} />
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </>
        </>
    );
}