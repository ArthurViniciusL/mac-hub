import Title from "./Title";
import Description from "./Description";
import PageIcon from "@/components/Ui/Icons/PageIcon";

interface AboutProps {
    content: {
        icon:string,
        title:string,
        about:string,
        color:string,
        link:string,
        target:string
    };
}

export default function Content({ content }: AboutProps) {
    
    return (
        <>
            <a className={`art:p:base art:flex art:gap:base art:flex:col art:hover:font:${content.color}-01`} href={content.link} target={content.target}>
                <div className="art:flex art:flex:row art:gap:sm">
                    <PageIcon name={content.icon} size={20} color={content.color} />
                    <Title titles={content.title} />
                </div>
                <Description description={content.about}/>
            </a>
        </>
    );
}