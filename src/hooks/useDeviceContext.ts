import { DeviceContext } from "@/context/DeviceContext";
import { useContext } from "react";

export function useDeviceContext() {
    const context = useContext(DeviceContext);

    if (context === undefined) {
        throw new Error('useDeviceContext must be used within a DeviceContextProvider -');
    }

    return context;
}