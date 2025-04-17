import PageIcon from "@/components/Ui/Icons/PageIcon";
import { NavMenuProps } from "..";

export default function CloseMenu({ content, art }: NavMenuProps) {

    return (
        <>
            <>
                <nav id="closeMenu" className={`${art.nav} art:m-l:sm`}>
                    <ul className={art.ul}>
                        {
                            content.map((menu, index) => (
                                <li key={index} title={menu.title.toLocaleLowerCase()} >
                                    <a href={menu.link} target="_blank">
                                        <button className="art:bg:none">
                                            <PageIcon name={menu.icon} color={menu.color} size={20} />
                                        </button>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav >
            </>
        </>
    )
}