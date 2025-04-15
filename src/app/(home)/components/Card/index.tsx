import css from "./Card.module.css";

import { ReactNode } from "react";

interface RenderCardProps {
    children: ReactNode;
}

export default function RenderCard({ children }: RenderCardProps) {
    return (
        <>
            <ul className={css.renderCard}>
                {children}
            </ul>
        </>
    )
}