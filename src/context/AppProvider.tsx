import { DeviceProvider } from "./DeviceContext";

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            <DeviceProvider>
                {children}
            </DeviceProvider>
        </>
    );
}