interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main className="art:p:base">{children}</main>
    );
}
