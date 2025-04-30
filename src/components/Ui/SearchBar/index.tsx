import { ChangeEvent, useState } from "react";

interface SearchBarProps {
    onSearch: (s: string) => void;
    placeholder: string;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {

    const [isActive, setIsActive] = useState<boolean>(false);

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        onSearch(e.target.value);
        setIsActive(true);
        setTimeout(() => setIsActive(false), 5000);
    }

    function handleActive() {
        setIsActive(!isActive)
    }
    
    const art = {
        content: `art:bg:none art:font:black-01 art:ease:quick art:outline:none art:border-b:solid art:border:${isActive ? "white-04" : "white-03"} art:border:thin art:m:base art:p-y:base art:p-x:lg`
    }

    return (
        <>
            <input className={art.content} style={{"width":"min(30rem,100%)"}} onMouseEnter={handleActive} onMouseLeave={handleActive} onChange={handleSearch} type="text" alt={placeholder} placeholder={placeholder} />
        </>
    )
}