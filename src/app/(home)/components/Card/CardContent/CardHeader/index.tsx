import { ReactNode } from "react";

interface CardHeaderProps {
    children: ReactNode;
}

export default function CardHeader({ children }: CardHeaderProps) {
    return (
        <>
            <div className="art:flex art:row art:gap:sm art:overflow:hidden">
                {children}
            </div>
        </>
    )
}