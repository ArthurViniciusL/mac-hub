"use client";

import { useHeaderContext } from "@/hooks/useHeaderContext"
import { useEffect } from "react";

export default function Team() {

    const { setTitle } = useHeaderContext();

    useEffect(() => {
        setTitle("Equipe")
    },[])

    return (
        <>
            Olá filá da gaita
        </>
    )
}