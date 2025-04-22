import { BugIcon } from "lucide-react";
import ToolTip from "../Ui/Tooltip";

interface BugReportProps {
    isOpen: boolean;
}

export default function BugReport({ isOpen }: BugReportProps) {

    const art = {
        container: "art:w:fit art:p:base art:bg:yellow:10% art:hover:bg:yellow:20%  art:border-rd:lg art:border:thin art:hover:border:yellow-01 art:border:white-01 art:border:solid",
        content: "art:font:yellow-01 art:font:semibold art:font:base art:flex art:gap:base art:row",
    }

    return (
        <>
            <div className={art.container} style={{ "right": "0", "top": "0", "zIndex": "1" }} >
                <ToolTip msg="Reportar bug">
                    <a className={art.content} href="https://forms.office.com/r/sATFTy7hU6" target="_blank">
                        <BugIcon size={20} />
                        {
                            isOpen ?
                                (
                                    <>Reportar bug</>
                                )
                                :
                                (
                                    <>

                                    </>
                                )
                        }
                    </a>
                </ToolTip >
            </div >
        </>
    );
}