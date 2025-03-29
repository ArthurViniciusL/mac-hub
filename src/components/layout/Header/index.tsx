"use client";

import Image from "next/image";
import { useState } from "react";


import { IconOpenMenu } from "@/app.modules";

export default function Header() {

    const [title] = useState<string>("Mural");
    const [menu] = useState<boolean>(false);

    return (
        <>
            <header className="art:w:full art:max-w:30 art:border:solid art:border:white-03 art:border:thin art:border-rd:base art:p:sm art:flex art:align-items:center art:justify-content:center">
                <h1 className="art:font:black-02  art:font:base art:font:semibold">
                    {title}
                </h1>
            </header>
        </>
    );
}
