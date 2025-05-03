import { IconClose } from "@/modules/app.modules";
import { ChangeEvent, useState } from "react";
import ToolTip from "../Tooltip";

interface SearchBarProps {
    onSearch: (s: string) => void;
    placeholder: string;
    clearSearch: () => void;
}

export default function SearchBar({ onSearch, clearSearch, placeholder }: SearchBarProps) {

    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(placeholder);
    const [showIconToClean, setShowIconToClean] = useState<any>(false);

    function handleSearchActive() {
        setSearchActive(!searchActive);
    }

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const content = e.target.value;

        onSearch(content);
        setInputValue(content);

        setSearchActive(true);
        setTimeout(() => setSearchActive(false), 8000)
        setShowIconToClean(true);
    }

    function clearInput() {
        clearSearch();
        setShowIconToClean(false)
        setInputValue(placeholder);
    }

    const art = {
        container: `art:w:full art:cursor:pointer art:ease:quick art:flex art:row art:justify-content:between art:border-b:solid art:border:${searchActive ? "black-01" : "white-03"} art:border:thin art:m-b:base art:p-x:base`,
        input: `art:w:full art:h:full art:p-y:base art:bg:none art:font:${searchActive ? "black-01" : "white-04"}`,
        btn: "art:flex art:ease:quick art:bg:none art:hover:bg:red:10% art:active:bg:red:10% art:font:white-04 art:hover:font:red-02 art:active:font:red-02 art:border-rd:base art:p:sm",
    }

    return (
        <>
            <div className={art.container} style={{ "width": "min(30rem,100%)" }}
                onMouseEnter={handleSearchActive}
                onMouseLeave={handleSearchActive}
                onClick={() => setInputValue("")}
            >
                <input
                    type="text" alt={placeholder}
                    className={art.input}
                    onChange={handleSearch}
                    value={inputValue}
                    placeholder={placeholder}
                />

                {
                    showIconToClean ? (
                        <ToolTip msg="Limpar pesquisa">
                            <button className={art.btn} onClick={clearInput}>
                                <IconClose size={22} />
                            </button>
                        </ToolTip>
                    ) : (
                        <></>
                    )
                }

            </div>
        </>
    )
}