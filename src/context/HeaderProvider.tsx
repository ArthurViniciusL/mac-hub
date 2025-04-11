"use client";

import { createContext, useState } from "react";

export const HeaderContext = createContext<any>({});

interface HeaderProviderProps {
    children: React.ReactNode;
}

export function HeaderProvider({ children }: HeaderProviderProps) {

    const [title, setTitle] = useState<string>("Mural");

    

    return (
        <HeaderContext.Provider value={{ title, setTitle }}>
            {children}
        </HeaderContext.Provider>
    );
}