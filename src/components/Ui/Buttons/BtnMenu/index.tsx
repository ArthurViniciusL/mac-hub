import PageIcon from "../../Icons/PageIcon";

interface BtnMenuProps {
    href: string;
    label: string;
    slice?: boolean;
    size: number;
    icon: string;
    color: string;
}

export default function BtnMenu({ href, label, slice, size, icon, color }: BtnMenuProps) {
    return (
        <>
            <a href={href}>
                <button className="art:w:full art:gap:sm art:p:sm art:flex art:row art:align-items:center art:bg:none art:hover:bg:white-02 art:font:black-01 art:font:capitalize art:font:base art:font:medium art:border-rd:base art:ease:quick">
                    <PageIcon name={icon} size={size} color={color} />
                    {
                        slice && label.length >= 18 ? (
                            <>
                                {label.slice(0, 18) + "..."}
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