"use client";

import { HeaderContext } from "@/context/HeaderProvider";
import { useContext } from "react";

export function useHeaderContext() {
    const context = useContext(HeaderContext);

    if (context === undefined) {
        throw new Error('useDeviceContext must be used within a HeaderContext/Provider -');
    }

    return context;
}