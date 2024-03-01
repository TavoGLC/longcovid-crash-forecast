"use client"

import { MainForecast } from "../forecast"
import { MainWhy } from "../why" 

import { ToDisplayMain } from "@/store/sidebar"

interface WrapperProps{
    children: React.ReactNode
}

export const MainDisplay = () => {

    const {toDisplay,onForecast,onWhy} = ToDisplayMain ((state) => state)

    return(
        <>
        {toDisplay==="forecast" && (
            <div>
                <MainForecast/>
            </div>
        )}

        {toDisplay==="why" && (
            <div>
                <MainWhy/>
            </div>
        )}
        </>
    )
}