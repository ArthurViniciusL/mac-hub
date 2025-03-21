import Title from "./Title";
import Description from "./Description";
import PageIcon from "@/components/PageIcon";

interface AboutProps {
    content: any;
}

export default function Content({ content }: AboutProps) {
    
    // TODO Concertar a tipagem

    return (
        <>
            <a className="art:p:base art:flex art:gap:base art:flex:col">
                <div className="art:flex art:flex:row art:gap:sm">
                    <PageIcon name={content.icon} size={20} color={content.color} />
                    <Title titles={content.title} />
                </div>
                <Description description={content.about}/>
            </a>
        </>
    );
}