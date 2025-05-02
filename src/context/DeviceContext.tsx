"use client";

import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext<any>({});

interface DeviceProviderProps {
    children: React.ReactNode;
}

export function DeviceProvider({ children }: DeviceProviderProps) {

    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {

        function handleResize() {
            setIsMobile(window.innerWidth <= 800);
        };

        // Só executar no client-side
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
}