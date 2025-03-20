import { IconEventsCalendar, IconhigHlightsOfTheDay, IconMainDocuments } from "@/app.modules";

interface PageIconProp {
    name: string;
    size: number;
}

export default function PageIcon({ name, size }: PageIconProp) {
    switch (name) {
        case "IconhigHlightsOfTheDay":
            return (
                <>
                    <IconhigHlightsOfTheDay
                        width={size}
                        height={size}
                    />
                </>
            );

        case "IconEventsCalendar":
            return (
                <>
                    <IconEventsCalendar
                        width={size}
                        height={size}
                    />
                </>
            );

        case "IconMainDocuments":
            return (
                <>
                    <IconMainDocuments
                        width={size}
                        height={size}
                    />
                </>
            )

        default:
            return null;
    }
}