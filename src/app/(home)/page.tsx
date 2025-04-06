

import styles from "@/app/(home)/components/Card/Card.module.css"

import Card from "./components/Card";
import { CardsContent } from "./components/Card/mural-cards";
import Banner from "./components/Card/Banner";
import Content from "./components/Card/Content";

export default function Home() {

    const data = CardsContent;

    return (
        <>

            <Card>
                {
                    data.slice(1).map((card, index) => (
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
            </Card>
        </>
    );
}
