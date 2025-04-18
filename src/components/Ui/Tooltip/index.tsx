"use client";

import { ReactNode, useState } from "react"

interface ToolTipProps {
    msg: string;
    children: ReactNode;
}

export default function ToolTip({ children, msg }: ToolTipProps) {


    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const [mouseTime, setMouseTime] = useState<number>(0);
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const tooltipPadding = 15;

    function handleOpen() {
        if (!isOpen) {
            // setIsOpen(true);
            setTimeout(() => setIsOpen(true), 300);
        }
        setTimeout(() => setIsOpen(false), 2000);
    }

    function handleClose() {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    function handleMouseMove(e: React.MouseEvent) {
        setMouseCoords({ x: e.clientX, y: e.clientY });
        setTimeout(() => setIsOpen(false), 2000);
    }

    const art = {
        container: "art:relative art:w:max-content art:h:fit",
        tooltip: "art:pointer:none art:fixed art:bg:black:70% art:font:capitalize art:font:white-01 art:p:sm art:border-rd:sm"
    }

    return (
        <>
            <div className={art.container} onMouseEnter={handleOpen} onMouseLeave={handleClose} onClick={handleClose} onMouseMove={handleMouseMove}>
                {children}
                {
                    isOpen ? (
                        <>
                            <span className={art.tooltip}
                                style={{
                                    "fontSize": "0.9rem", "zIndex": "100",
                                    top: mouseCoords.y + tooltipPadding,
                                    left: mouseCoords.x + tooltipPadding,
                                }}>
                                {msg}
                            </span>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}