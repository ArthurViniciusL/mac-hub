import Image from "next/image";
// import logotipoMac from "@/assets/icons/logotipo-mac.svg";
import logoMac from "@/assets/icons/logo-mac.svg";

/* interface LogoMac {
    
}
 */
export default function LogoMac() {
    return (
        <>
            <a href="https://museumaccg.org.br/" target="_blank" >
                <div className=" art:flex art:gap:sm art:row art:align-items:center">
                    <Image src={logoMac}
                        alt="logomarca do mac"
                        width={50}
                    />
                    <div className="art:flex art:col art:font:sm art:font:semibold art:font:black-02">
                        <p>
                            MUSEU DE ARTE
                        </p>
                        <p>
                            E CIÊNCIA DE
                        </p>
                        <p>
                            CAMPINA GRANDE
                        </p>
                    </div>
                </div>
            </a>
        </>
    );
}