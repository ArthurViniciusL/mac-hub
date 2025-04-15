import css from "../../Card.module.css";

import { IconImageNotFount } from "@/app.modules";
import Image from "next/image";

interface BannerProps {
    src: any;
    //src: string;
    about: string;
    alt: string;
}

export default function Banner({ src, about, alt }: BannerProps) {
    return (
        <>
            <div title={about} className={`${css.cardBanner} art:ease:slow`} >
                {
                    !src ?
                        (
                            <div className="art:w:full art:h:full art:bg:white-02 art:flex art:justify-content:center art:align-items:center"
                            >
                                <IconImageNotFount />
                            </div>
                        )
                        :
                        (
                            <Image
                                className="art:w:fit"
                                src={src}
                                alt={`banner de ${alt}`}
                                height={300}
                            />
                        )
                }
            </div>
        </>
    )
}