import PageIcon from "@/components/PageIcon";

interface IconProps {
    icon: string;
    color: string;
}

export default function Icon({ icon, color }: IconProps) {
    return (
        <span className={`
                art:w:fit
                art:h:fit
                art:p:sm
                art:border-rd:sm
                art:font:white-01
                art:bg:${color}
            `}
        >
            <PageIcon name={icon} size={20} />
        </span>
    );
}