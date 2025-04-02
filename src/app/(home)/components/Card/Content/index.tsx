import Title from "./Title";
import Description from "./Description";
import PageIcon from "@/components/PageIcon";
import AppRoutes from "@/app.routes";

interface AboutProps {
    content: {
        icon:string,
        title:string,
        about:string,
        color:string
    };
}

export default function Content({ content }: AboutProps) {
    
    return (
        <>
            <a className={`art:p:base art:flex art:gap:base art:flex:col art:hover:font:${content.color}`} href={AppRoutes.warnings} target="_blank">
                <div className="art:flex art:flex:row art:gap:sm">
                    <PageIcon name={content.icon} size={20} color={content.color} />
                    <Title titles={content.title} />
                </div>
                <Description description={content.about}/>
            </a>
        </>
    );
}