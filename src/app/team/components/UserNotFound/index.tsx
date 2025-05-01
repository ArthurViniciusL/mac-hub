import Image from "next/image";

import img from "@/assets/images/search_not_found.svg";

export default function UserNotFound() {
    return (
        <>
        <Image src={img} alt="usuário não encontrado" width={300}/>
        </>
    );
}