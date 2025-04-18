import { IconCloseMenu, IconOpenMenu } from "@/app.modules";
import { IButton } from "@/types/IButton";
import ToolTip from "../../Tooltip";

export default function BtnPanel({ state, setState }: IButton) {

    const btnPainel = "art:bg:white-01 art:hover:bg:black-01 art:ease-in:instant art:font:black-01 art:hover:font:white-01 art:p:sm art:border-rd:base art:flex"

    return (
        <>
            {
                state ?
                    (
                        <>
                            <ToolTip msg="Fechar">
                                <button onClick={setState} className={btnPainel} >
                                    <IconCloseMenu size={20} />
                                </button>
                            </ToolTip>
                        </>
                    )
                    :
                    (
                        <ToolTip msg="Abrir">
                        <button onClick={setState} className={btnPainel}>
                            <IconOpenMenu size={20} />
                        </button>
                        </ToolTip>
                    )
            }
        </>
    );
}