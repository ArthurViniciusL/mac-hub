import Content from "./Content";
import Banner from "./Content/Banner";
import styles from "./Mural.module.css";
import { CardsContent } from "./mural-cards";

export default function Mural() {
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
                                art:font:black-02
                                art:bg:white-01
                                art:border-rd:lg
                                art:border:solid
                                art:border:white-03
                                art:hover:border:${card.color}
                            `}
                        >
                            <Banner path={card.banner}
                                alt={card.title}
                                about={card.aboutBanner}
                            />
                            <Content content={card} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}