import { DeviceProvider } from "./DeviceContext";
import { HeaderProvider } from "./HeaderProvider";

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            <DeviceProvider>
                <HeaderProvider>
                    {children}
                </HeaderProvider>
            </DeviceProvider>
        </>
    );
}