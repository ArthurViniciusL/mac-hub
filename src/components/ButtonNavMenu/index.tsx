import { IconCloseMenu, IconOpenMenu } from "@/app.modules";


interface ButtonNavMenuProps {
    state: boolean;
    setState: () => void;
}

export default function ButtonNavMenu({ state, setState }: ButtonNavMenuProps) {
    
    const btnPainel = "art:bg:white-01 art:p:sm art:border-rd:base art:flex"

    return (
        <>
            {
                state ?
                    (
                        <>
                            <button onClick={setState} className={btnPainel}>
                                <IconCloseMenu size={20} />
                            </button>
                        </>
                    )
                    :
                    (
                        <button onClick={setState} className={btnPainel}>
                            <IconOpenMenu size={20} />
                        </button>
                    )
            }
        </>
    );
}