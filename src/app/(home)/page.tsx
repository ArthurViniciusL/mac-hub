'use client';

import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <h1>
                Valor {count}
            </h1>

            <button
                className="
                    art:btn:base
                    art:hover:bg:blue-02
                "
                onClick={() => setCount(count + 1)}>
                +
            </button>

            <button className="art:btn:base art:hover:bg:red-02" onClick={() => setCount(count - 1)}>
                -
            </button>
        </>
    );
}