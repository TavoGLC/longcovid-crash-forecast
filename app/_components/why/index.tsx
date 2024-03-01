
"use client"

import { Button } from "@/components/ui/button"
import { ToDisplayLanguaje } from "@/store/languaje"
import { MainESP } from "./esp";
import { MainENG } from "./eng";

export const MainWhy = () => {
    const {toDisplay,onENG,onSPA} = ToDisplayLanguaje((state) => state)
    return (
        <div>
            <div className="flex justify-end">
                <Button onClick={onSPA}>
                    ESP
                </Button>
                <Button onClick={onENG}>
                    ENG
                </Button>
            </div>
            <>
            {toDisplay==="SPA" && (
                <div>
                <MainESP/>
                </div>
            )}

            {toDisplay==="ENG" && (
                <div>
                    <MainENG/>
                </div>
            )}
        </>
        </div>
    )
}