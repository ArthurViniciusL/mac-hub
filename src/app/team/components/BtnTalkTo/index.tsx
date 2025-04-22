import { IconTalkTo } from "@/app.modules";
import ToolTip from "@/components/Ui/Tooltip";
import { IButton } from "@/types/IButton";

export default function BtnTalkTo({ href, label, bgColor }: IButton) {
    return (
        <>
            <div className="art:w:full art:absolute art:top:0 art:right:0 art:m:base art:flex art:justify-content:end">
                <div className="art:w:fit">
                    <ToolTip msg={`Falar com ${label}`}>
                        <a className="" href={`mailto:${href}`} target="_blank">
                            <button className={`art:w:full art:ease:quick art:flex art:p:sm art:font:${bgColor}-01 art:bg:${bgColor}:10% art:hover:bg:${bgColor}:20% art:border-rd:sm`}>
                                <IconTalkTo size={22} />
                            </button>
                        </a>
                    </ToolTip>
                </div>
            </div>
        </>
    )
}