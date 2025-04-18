import "./Main.css";

import { ReactNode } from "react";

interface MainProps {
    className?: string;
    children: ReactNode;
}

export default function Main({ className, children }: MainProps) {
    return (
        <>
            <main id="main-component" className={className}>
                {children}
            </main>
        </>
    )
}