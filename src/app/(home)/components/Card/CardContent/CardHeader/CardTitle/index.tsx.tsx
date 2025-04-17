import ToolTip from "@/components/Ui/Tooltip";

interface CardTitleProps {
    text: string;
}

export default function CardTitle({ text }: CardTitleProps) {
    return (
        <>
            <ToolTip msg={text}>
                <h3 className="art:font:capitalize art:font:semibold art:font:lg">
                    {
                        text.length > 18 ?
                            (
                                text.slice(0, 16) + "..."
                            )
                            :
                            (
                                text + "."
                            )
                    }
                </h3>
            </ToolTip>

        </>
    )
}