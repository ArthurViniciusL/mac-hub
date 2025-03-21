import { IconImageNotFount } from "@/app.modules";
import styles from "@/app/(home)/components/Card/Card.module.css";
import Image from "next/image";

interface BannerProps {
    path: any;
    alt: string;
    about: string;
}

export default function Banner({ path, alt, about }: BannerProps) {
    return (
        <>
            <div title={about} className={styles.containerBanner}>
                {
                    !path ?
                        (
                            <div className="
                                                art:w:full
                                                art:h:full
                                                art:font:black-04
                                                art:bg:white-02
                                                art:flex
                                                art:justify-content:center
                                                art:align-items:center
                                            "
                            >
                                <IconImageNotFount />
                            </div>
                        )
                        :
                        (
                            <Image
                                className="art:w:fit"
                                src={path}
                                alt={`banner de ${alt}`}
                                height={300}
                            />
                        )
                }
            </div>
        </>
    );
}