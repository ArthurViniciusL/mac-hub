"use client";

import Image from "next/image";

import light from "@/assets/icons/app-logo/mac_hub_light.svg";
import dark from "@/assets/icons/app-logo/mac_hub_dark.svg";

import { useEffect, useState } from "react";
import AppRoutes from "@/app.routes";
import ToolTip from "../../Tooltip";

interface LogoMacHubProps {
    size: number;
}

export default function LogoMacHub({ size }: LogoMacHubProps) {

    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {

        if (typeof window === "undefined") {
            return;
        }

        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");

        function handleTheme() {
            const isDarkMode = darkTheme.matches;
            setIsDark(isDarkMode);
        }

        handleTheme();
        darkTheme.addEventListener("change", handleTheme);

        return () => {
            darkTheme.removeEventListener("change", handleTheme);
        };
    }, []);

    return (
        <>
            <ToolTip msg="Mac Hub" >
                <a href={AppRoutes.home}>
                    {
                        isDark ?
                            (
                                <>
                                    <Image className=""
                                        src={light}
                                        alt="logo do mac hub."
                                        height={size}
                                        priority={true}
                                    />

                                </>
                            )
                            :
                            (
                                <>
                                    <Image className=""
                                        src={dark}
                                        alt="logo do mac hub."
                                        height={size}
                                        priority={true}
                                    />
                                </>
                            )

                    }
                </a>
            </ToolTip>
        </>
    );
}