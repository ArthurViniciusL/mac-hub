import { IconAppsMicrosoft, IconDocumentLibrary, IconEducational, IconEventPlanning, IconEventsCalendar, IconHlightsOfTheDay, IconMacGallery, IconMainDocuments, IconMural, IconReportsAndMetrics, IconSpaceReservation, IconTeam } from "@/app.modules";

interface PageIconProp {
    name: string;
    size: number;
    color?: string;
}

export default function PageIcon({ name, size, color }: PageIconProp) {

    function returnAnIcon(name: string, size: number) {
        switch (name) {
            case "IconMural":
                return <IconMural width={size} height={size} />;
            case "IconHlightsOfTheDay":
                return <IconHlightsOfTheDay width={size} height={size} />;
            case "IconEventsCalendar":
                return <IconEventsCalendar width={size} height={size} />;
            case "IconMainDocuments":
                return <IconMainDocuments width={size} height={size} />;
            case "IconAppsMicrosoft":
                return <IconAppsMicrosoft width={size} height={size} />;
            case "IconDocumentLibrary":
                return <IconDocumentLibrary width={size} height={size} />;
            case "IconEventPlanning":
                return <IconEventPlanning width={size} height={size} />;
            case "IconSpaceReservation":
                return <IconSpaceReservation width={size} height={size} />;
            case "IconReportsAndMetrics":
                return <IconReportsAndMetrics width={size} height={size} />;
            case "IconMacGallery":
                return <IconMacGallery width={size} height={size} />;
            case "IconEducational":
                return <IconEducational width={size} height={size} />;
            case "IconTeam":
                return <IconTeam width={size} height={size} />;

            default:
                return null;
        }
    }

    return (
        <span className={`art:font:${color}-01 art:bg:${color}:10% art:border-rd:sm art:flex art:justify-content:center art:align-items:center`}
            style={{ "width": "2.2rem", "height": "2.2rem" }}>
            {returnAnIcon(name, size)}
        </span>
    )
}