"use client";

import Image from "next/image";

import css from "./under-construction.module.css";
import bee from "@/assets/images/IMG-20250311-WA0035.jpg";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import { useEffect, useRef } from "react";

export default function Build() {

    const { setTitle } = useHeaderContext();

    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        setTitle("Ainda em construção...");
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Define o volume para 30%
        }
    }, [setTitle]);

    return (
        <>
            <main className="art:flex art:flex:col art:align-items:center art:gap:lg">
                <Image className={`${css.img} art:border-rd:lg`} priority={true} src={bee} alt="" />
                <h1 className="art:font:black-04">
                    Ainda em construção...
                </h1>
                
            </main>
        </>
    );
}