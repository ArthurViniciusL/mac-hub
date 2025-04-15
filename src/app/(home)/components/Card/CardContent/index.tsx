import css from "../Card.module.css";

import { ReactNode } from "react";

interface CardProps {
    color:string;
    children: ReactNode;
}

export default function Card({ color, children }: CardProps) {
    
    const art = {
        card: `art:overflow:hidden art:ease:quick art:flex art:col art:gap:base art:border-rd:lg art:border:solid art:border:thin art:border:white-03 art:hover:border:${color}-01`
    }

    return (
        <li className={`${css.card} ${art.card}`} >
            {children}
        </li>
    )
}