interface CardTitleProps {
    text: string;
}

export default function CardTitle({ text }: CardTitleProps) {
    return (
        <>
            <h2 title={text} className="art:font:capitalize art:font:semibold art:font:lg">
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
            </h2>
        </>
    )
}