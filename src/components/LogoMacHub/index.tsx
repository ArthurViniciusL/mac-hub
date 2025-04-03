import Image from "next/image";
import appLogo from "@/assets/icons/app-logo/mac_hub.svg";

interface LogoMacHubProps {
    size: number;
}


/* @media (prefers-color-scheme: dark) {
  
} */

export default function LogoMacHub({ size }: LogoMacHubProps) {
    return (
        <>
            <Image className=""
                src={appLogo}
                alt=""
                /* 90 */
                height={size}
            />
        </>
    );
}