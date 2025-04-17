export interface IButton {
    state?: boolean;
    setState?: () => void;
    children?:React.ReactNode;

    href?: string;
    label?: string;
    sliceLabel?: boolean;
    
    iconSize?: number;
    iconName?: string;
    iconColor?: string;
}