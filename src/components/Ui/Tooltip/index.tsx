"use client";

import { ReactNode, useState } from "react"

interface ToolTipProps {
    msg: string;
    children: ReactNode;
}

export default function ToolTip({ children, msg }: ToolTipProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpen() {
        if (!isOpen) {
            setIsOpen(true)
            // setTimeout(() => setIsOpen(true), 500)
        }
        setTimeout(() => setIsOpen(false), 2000);
    }

    function handleClose() {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    const art = {
        msg: "art:absolute art:ease-out:smooth art:m:xl art:pointer:none art:p:sm art:bg:black:70% art:font:capitalize art:font:white-01 art:border-rd:sm"
    }

    return (
        <>
            {/* se esconde: */}

            {
                isOpen ? (
                    <span className={art.msg} style={{"fontSize":"0.9rem", "transition":"opacity 1s ease-out"}}>
                        {msg}.
                    </span>
                ) : (
                    <></>
                )
            }

            <span className="art:w:fit art:h:fit" onMouseEnter={handleOpen} onMouseLeave={handleClose} onClick={()=>setIsOpen(false)}>
                {children}
            </span>
        </>
    )
}