import Title from "./Title";
import Icon from "./Icon";
import Description from "./Description";

interface AboutProps {
    content: any;
}

export default function Content({ content }: AboutProps) {
    
    // TODO Concertar a tipagem

    return (
        <>
            <a className="art:p:base art:flex art:gap:base art:flex:col">
                <div className="art:flex art:flex:row art:gap:sm">
                    <Icon icon={content.icon} color={content.color} />
                    <Title titles={content.title} />
                </div>
                <Description description={content.about}/>
            </a>
        </>
    );
}