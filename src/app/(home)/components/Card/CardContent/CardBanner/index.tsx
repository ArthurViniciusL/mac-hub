import { IconImageNotFount } from "@/modules/app.modules";
import ToolTip from "@/components/Ui/Tooltip";
import Image from "next/image";

interface BannerProps {
    src: any;
    about: string;
    alt: string;
}

export default function Banner({ src, about, alt }: BannerProps) {

    const art = {
        container: "art:w:full art:h:50% art:ease:slow art:flex art:align-items:start art:justify-content:center art:overflow:hidden cursor:default",
        imgNoFount: "art:w:full art:h:full art:bg:white-02 art:flex art:justify-content:center art:align-items:center",
        banner: "art:w:fit"
    }

    return (
        <>
            <div className={art.container}>
                <ToolTip msg={`Quadro: ${about}`}>
                    {
                        !src ?
                            (
                                <div className={art.imgNoFount}>
                                    <IconImageNotFount />
                                </div>
                            )
                            :
                            (
                                <Image
                                    className={art.banner}
                                    src={src}
                                    alt={`banner de ${alt}`}
                                    height={300}
                                />
                            )
                    }
                </ToolTip>
            </div>
        </>
    )
}