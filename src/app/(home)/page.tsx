

import { PagesContent } from "@/utils/PagesContent";
import RenderCard from "./components/Card";
import Card from "./components/Card/CardContent";
import Banner from "./components/Card/CardContent/CardBanner";
import CardHeader from "./components/Card/CardContent/CardHeader";
import PageIcon from "@/components/Ui/Icons/PageIcon";
import CardTitle from "./components/Card/CardContent/CardHeader/CardTitle/index.tsx";
import CardDescription from "./components/Card/CardContent/CardDescription";

export default function Home() {

    const data = PagesContent;


    return (
        <>
            <main className="art:w:fit">
                <RenderCard>
                    {
                        data.slice(1).map((card, index) => (
                            <Card key={index}>
                                <Banner src={card.banner} about={card.aboutBanner} alt={card.title} />
                                <a href={card.link} target={card.target} className={`art:p-l:base art:p-r:base art:flex art:col art:gap:sm art:hover:font:${card.color}-01 art:ease:quick`}>
                                    <CardHeader>
                                        <PageIcon name={card.icon} color={card.color} size={18} />
                                        <CardTitle text={card.title} />
                                    </CardHeader>
                                    <CardDescription text={card.about} />
                                </a>
                            </Card>
                        ))
                    }
                </RenderCard>
            </main>
        </>
    );
}
