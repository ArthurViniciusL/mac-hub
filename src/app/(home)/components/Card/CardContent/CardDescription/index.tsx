import { ExternalLink } from "lucide-react";

interface CardDescriptionProps {
    text: string;
}

export default function CardDescription({ text }: CardDescriptionProps) {
    const art = {
        title: "art:flex art:col art:gap:sm"
    }

    return (
        <>
            <p className={art.title} title={text.toLocaleLowerCase().split(".")[0]} >
                {
                    text.length > 51 ?
                        (
                            <>
                                {text.slice(0, 51)}...
                            </>
                        )
                        :
                        (
                            <>
                                {text.split(".")}.
                            </>
                        )
                }
            </p>
        </>
    )
}