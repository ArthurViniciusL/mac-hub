import { StaticImageData } from "next/image";

export interface IPagesContent {
    id: number;
    banner: string | StaticImageData;
    icon: string;
    title: string;
    about: string;
    link: string;
    target: string;
    aboutBanner: string;
    color: string;
}