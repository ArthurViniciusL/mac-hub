import styles from "./Cards.module.css";
import Image from "next/image";
import { CardsContent } from "./mural-cards";
import PageIcon from "@/components/PageIcon";
import { IconImageNotFount } from "@/app.modules";

export default function Cards() {
    return (
        <>
            <ul className={styles.container}>
                {
                    CardsContent.map((card, index) => (
                        <li key={index}
                            className={`
                                ${styles.box}
                                art:flex
                                art:flex:col
                                art:border-rd:lg
                                art:border:solid
                                art:border:white-03
                                art:hover:border:${card.color}
                            `}
                        >
                            <div className={styles.containerBanner}>
                                {
                                    card.banner === undefined || card.banner === "" ?
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
                                                src={card.banner}
                                                alt={`banner de ${card.title}`}
                                                height={300}
                                            />
                                        )
                                }
                            </div>
                            <a
                                className={`
                                    art:p:base
                                    art:flex
                                    art:gap:base
                                    art:flex:col
                                `}
                            >
                                <div
                                    className="
                                        art:flex
                                        art:flex:row
                                        art:gap:sm
                                    "
                                >
                                    <span
                                        className={`
                                            art:w:fit
                                            art:h:fit
                                            art:p:sm
                                            art:border-rd:sm
                                            art:font:white-01
                                            art:bg:${card.color}
                                        `}
                                    >
                                        <PageIcon name={card.icon} size={20} />
                                    </span>
                                    <h1 className="
                                            art:font:bold
                                            art:font:lg
                                            art:font:capitalize
                                        "
                                    >
                                        {card.title}
                                    </h1>
                                </div>
                                <p
                                    className="
                                        art:font:base
                                        art:font:black-03
                                    "
                                >
                                    {card.about}
                                </p>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}