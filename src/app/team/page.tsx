"use client";

import css from "./Team.module.css";

import Main from "@/components/Ui/Main";
import { useHeaderContext } from "@/hooks/useHeaderContext"
//import Image from "next/image";
import { useEffect, useState } from "react";
import BtnTalkTo from "./components/BtnTalkTo";
import { TeamProfiles } from "@/utils/Objects/TeamProfiles";
import ToolTip from "@/components/Ui/Tooltip";
import SearchBar from "@/components/Ui/SearchBar";
import UserNotFound from "./components/UserNotFound";

export default function Team() {

    const { setTitle } = useHeaderContext();
    const [users, setUsers] = useState(TeamProfiles);

    useEffect(() => {
        setTitle("Equipe");
        setUsers(users.sort((previous, next) => previous.name.localeCompare(next.name)));
    }, []);

    function handleSearch(search: string) {
        const query = search.toLowerCase();
        const filter = TeamProfiles.filter(
            (user) =>
                user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
        );
        setUsers(filter);
    }

    function handleClearSearch() {
        setUsers(TeamProfiles);
    }

    function treatName(name: string) {
        if (!name) return "";

        const names = name.trim().split(/\s+/);

        if (names.length === 1) return names[0];

        const firstName = names[0];
        const lastName = names[names.length - 1];

        return `${firstName} ${lastName}`;
    }

    const art = {
        container: "art:w:full art:flex art:col art:wrap art:gap:base art:justify-content:center art:align-items:start",
        box: "art:w:full art:flex art:justify-content:center",
        card: "art:w:full art:relative art:overflow:hidden art:flex art:gap:sm art:row art:wrap art:align-items:start art:justify-content:between art:p:base art:border:solid art:border:thin art:border:white-03 art:hover:border:white-04 art:border-rd:lg art:hover:border-rd:base art:ease:quick",

        box_user: "art:flex art:row art:wrap  art:gap:base",

        user_picture: "art:pointer:none art:flex art:justify-content:center art:align-items:center art:p:base art:no-dark:font:white-02 art:font:semibold art:font:base art:border-rd:base art:border:thin art:border:solid",

        content_user: "art:overflow:hidden art:flex art:wrap  art:col art:gap:sm"
    }

    return (
        <>
            <Main className="art:w:full art:flex art:gap:base art:col art:align-items:center">
                <SearchBar onSearch={handleSearch} clearSearch={handleClearSearch} placeholder="Pesquisar por contato..." />
                {
                    users.length > 0 ?
                        (
                            <ul className={`${art.container} ${css.container}`}>
                                {
                                    users.map((user, index) => (
                                        <li key={index} className={art.box}>
                                            <div className={art.card} style={{ "maxWidth": "30rem", "height": "min(fit-content,8rem)" }}>
                                                <div className={art.box_user}>
                                                    <div className={`
                                                            ${art.user_picture} 
                                                            ${user.color_theme === "black" ?
                                                            `art:no-dark:bg:${user.color_theme}-02`
                                                            :
                                                            `art:bg:${user.color_theme}-02
                                                            `}
                                                            art:border:${user.color_theme}:50%
                                                        `}
                                                        style={{ "width": "3rem", "height": "3rem" }}>
                                                        {user.name[0].toUpperCase()}
                                                    </div>
                                                    {/* style={{ "width": "25rem" }} */}
                                                    <div className={art.content_user}>
                                                        <div className="art:flex art:col art:gap:sm art:wrap">
                                                            <h3 className="art:font:semibold art:font:base art:font:capitalize">
                                                                {
                                                                    treatName(user.name).length > 14 ?
                                                                        (
                                                                            treatName(user.name).slice(0, 13) + "..."
                                                                        ) : (
                                                                            treatName(user.name)
                                                                        )
                                                                }
                                                            </h3>
                                                            <h4 className="art:font:black-04 art:font:capitalize art:font:medium" style={{ "fontSize": "0.9rem" }}>
                                                                {
                                                                    user.position.length > 17 ?
                                                                        (
                                                                            user.position.slice(0, 17) + "..."
                                                                        ) : (
                                                                            user.position
                                                                        )
                                                                }
                                                            </h4>
                                                        </div>
                                                        <ToolTip msg={user.email}>
                                                            <a href={`mailto:${user.email}`} className={`art:ease:quick art:font:black-04 art:flex art:hover:font:${user.color_theme}-01`}>
                                                                {
                                                                    user.email.length > 31 ?
                                                                        (
                                                                            user.email.slice(0, 31).toLocaleLowerCase() + "..."
                                                                        ) : (
                                                                            user.email.toLocaleLowerCase()
                                                                        )
                                                                }
                                                            </a>
                                                        </ToolTip>
                                                    </div>
                                                </div>
                                                <BtnTalkTo href={user.email} label={treatName(user.name)} bgColor={user.color_theme} />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                        :
                        (
                            <div className="art:w:full art:flex art:col art:gap:2xl art:justify-content:center art:align-items:center" style={{ "minHeight": "50dvh" }}>
                                <UserNotFound />
                                <p className="art:font:black-04">
                                    Nenhum contato encontrado!
                                </p>
                            </div>
                        )
                }
            </Main >
        </>
    )
}