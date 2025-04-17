import { IconCloseMenu, IconOpenMenu } from "@/app.modules";
import { IButton } from "@/types/IButton";

export default function BtnPanel({ state, setState }: IButton) {
    
    const btnPainel = "art:bg:white-01 art:hover:bg:black-01 art:ease-in:instant art:font:black-01 art:hover:font:white-01 art:p:sm art:border-rd:base art:flex"

    return (
        <>
            {
                state ?
                    (
                        <>
                            <button onClick={setState} className={btnPainel} >
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