import { IconEventsCalendar, IconHlightsOfTheDay, IconMainDocuments } from "@/app.modules";

interface PageIconProp {
    name: string;
    size: number;
    color: string;
}

export default function PageIcon({ name, size, color }: PageIconProp) {

    function returnAnIcon(name: string, size: number) {
        switch (name) {
            case "IconHlightsOfTheDay":
                return <IconHlightsOfTheDay width={size} height={size} />;
            case "IconEventsCalendar":
                return <IconEventsCalendar width={size} height={size} />;
            case "IconMainDocuments":
                return <IconMainDocuments width={size} height={size} />;
            default:
                return null;
        }
    }

    return (
        <span className={`art:font:white-02 art:bg:${color} art:p:sm art:border-rd:sm art:flex art:justify-content:center art:align-items:center`}
            style={{ "width": "2.2rem", "height": "2.2rem" }}>
            {returnAnIcon(name, size)}
        </span>
    )
}