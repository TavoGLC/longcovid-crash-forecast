import { create } from "zustand"

interface LanguajeDisplayControl {
    toDisplay: "ENG" | "SPA";
    onENG: () => void;
    onSPA: () => void;
}

export const ToDisplayLanguaje = create<LanguajeDisplayControl>( (set) => ({
    toDisplay: "ENG",
    onENG: () => set(() => ({toDisplay:"ENG"})),
    onSPA: () => set(() => ({toDisplay:"SPA"})),
}))