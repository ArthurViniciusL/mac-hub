import { IconCloseMenu, IconOpenMenu } from "@/app.modules";
import Image from "next/image";
import appLogo from "@/assets/icons/app-logo/mac_hub.svg";

interface NavMenuHeaderProps {
    state: boolean;
    setState: (state: boolean) => void;
}

export default function NavMenuHeader({ state, setState }: NavMenuHeaderProps) {
    return (
        <>
            <section className="art:w:full art:flex art:gap:sm art:justify-content:center">
                {
                    state ?
                        (
                            <button onClick={setState} className="art:cursor:pointer art:p:sm art:border-rd:sm art:bg:none art:hover:bg:white-03 art:font:black-01 art:hover:font:black-01 art:flex">
                                <IconOpenMenu size={20} />
                            </button>
                        )
                        :
                        (
                            <div className="art:w:full art:flex art:justify-content:space-between">
                                <Image className="art:border-rd:sm"
                                    src={appLogo}
                                    alt=""
                                    height={90}
                                />
                                <button onClick={setState} className="art:cursor:pointer art:p:sm art:border-rd:sm art:bg:none art:hover:bg:white-03 art:font:black-01 art:hover:font:black-01 art:flex">
                                <IconCloseMenu size={20} />
                            </button>
                            </div>
                        )
                }

            </section>
        </>
    );
}