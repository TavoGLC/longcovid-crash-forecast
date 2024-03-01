"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToDisplayMain } from "@/store/sidebar"
import { LineChart, HelpCircle,CircleDollarSign } from "lucide-react";

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({children,}:WrapperProps) => {
    const {toDisplay,onForecast,onWhy} = ToDisplayMain((state) => state)

    return(
        <aside className="fixed left-0 flex flex-col w-20 h-full bg-[#000000] justify-center px-3">
            <div className="space-y-20">
                <ul>
                    <Button onClick={onForecast} title="Forecast"> 
                        <LineChart />
                    </Button>   
                </ul>
                <ul>
                    <Button onClick={onWhy} title="Why it happens?"> 
                        <HelpCircle />
                    </Button>
                </ul>
                <ul>
                    <Link href="https://www.buymeacoffee.com/tavoglc"  target="_blank" rel="noopener noreferrer">
                        <Button title="Donate">
                            <CircleDollarSign />
                        </Button>
                    </Link>
                </ul>
                </div>
        </aside>
    )
}