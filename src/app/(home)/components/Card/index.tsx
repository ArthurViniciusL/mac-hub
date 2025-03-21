import styles from "@/app/(home)/components/Card/Card.module.css";

interface CardProps {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <>
            <ul className={styles.container}>
                {children}
            </ul>
        </>
    );
}