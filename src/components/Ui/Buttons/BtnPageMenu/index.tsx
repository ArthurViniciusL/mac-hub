import { IButton } from "@/types/IButton";
import PageIcon from "../../Icons/PageIcon";

export default function BtnPageMenu({ href, label, sliceLabel, iconSize, iconName, iconColor }: IButton) {
    return (
        <>
            <a href={href}>
                <button className="art:w:full art:gap:sm art:ease:instant art:p:sm art:flex art:row art:align-items:center art:bg:none art:hover:bg:white-02 art:font:black-01 art:font:capitalize art:font:base art:font:normal art:border-rd:base">
                    <PageIcon name={iconName!} size={iconSize!} color={iconColor} />
                    {
                        sliceLabel && label!.length >= 18 ? (
                            <>
                                {label!.slice(0, 18) + "..."}
                            </>
                        ) : (
                            <>
                                {label}
                            </>
                        )
                    }
                </button>
            </a>
        </>
    );
}