import { create } from "zustand"

interface MainDisplayControl {
    toDisplay: "forecast" | "why";
    onForecast: () => void;
    onWhy: () => void;
}

export const ToDisplayMain = create<MainDisplayControl>( (set) => ({
    toDisplay: "forecast",
    onForecast: () => set(() => ({toDisplay:"forecast"})),
    onWhy: () => set(() => ({toDisplay:"why"})),
}))