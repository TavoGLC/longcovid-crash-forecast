"use client"

import { useState, useEffect, Suspense } from "react"

import { MakeYearlyData } from "./makeYearlyData"
import { MakeDailyData } from "./makeDailyData"
import { GetSolarData } from "./getSolarData"

import { ApproximationPlots } from "./approximationPlots"
import { SolarPlots } from "./solarPlots"
import { GetScores } from "./utilities"


export const MainForecast = () => {
/* 
    is client
 */
    const [isClient, setIsClient] = useState(false)
    useEffect(()=>{setIsClient(true)},[])

/* 
    handle window size 
 */

    function getWindowDimensions() {

        var width = 500
        var height = 550
        var isSmall = width < 600 || height < 600
        var isVertical = width < height

        if (typeof window !== "undefined"){
            var { innerWidth: width, innerHeight: height } = window
            isSmall = width < 600 || height < 600
            isVertical = width < height
        }

        return {width,height,isSmall,isVertical};
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        ///return () => window.removeEventListener('resize', handleResize)
    }, [])


    function FormatSize(){
        const dimentions = {width:Math.floor(windowDimensions.width/4.5),
                            height:Math.floor(windowDimensions.height/14.5)}
        return dimentions
    }

    const plotSize = FormatSize()

    /* 
    Format NASA retrived solar data 
    */
    const ixray = {"xdata":["2024-02-02T02:48:00Z","2024-02-02T02:48:00Z"],"ydata":[7.0e-09,7.0e-04,]}
    const imag = {"xdata":["2024-02-05 02:19:00.000","2024-02-05 04:19:00.000"],"bz":[7.8e-09,7.8e-04,],"bt":[7.8e-09,7.8e-04,]}
    const iplasma = {"xdata":["2024-02-05 02:19:00.000","2024-02-05 04:19:00.000"],"density":[7.8e-09,7.8e-04,],"temperature":[7.8e-09,7.8e-04,],"speed":[7.8e-09,7.8e-04,]}

    const initialsolar = {
        "xray":ixray,
        "mag":imag,
        "plasma":iplasma,
        "scores":{'daily':1,'hours6':1,'hours12':1},
        "loaded":false
    }

    const [solarData, setSolarData] = useState(initialsolar)

    const FetchData = async () => {
        const solarData = await GetSolarData()
        setSolarData(solarData)
    }

    useEffect(()=>{
        FetchData()}
        ,[])
    
        /* 
    Current day
    */ 

    function daysIntoYear(date:Date){
        return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
    }
    const currentDate = new Date()
    const doy = daysIntoYear(currentDate)

    /* 
    Format and generate slider data
    */ 

    
    const [inputForm,setSliderValues] = useState({
        latitude:10,
        longitude:10,
    })

    const handleChange = (e:any) => setSliderValues({
        ...inputForm,
        [e.target.name]:e.target.value
    })
    
    const dataInitial = {
        'yearly':{'xdata':[1,2,3,23],'ydata':[1,2,3,2]},
        'daily':{'xdata':[1,2,3,23],'ydata':[1,2,3,2]}
    }

    const [equationData, setEquationData] = useState(dataInitial)

    useEffect(()=>{
        const FormatData = () => {
        
            const yearlydata = MakeYearlyData(inputForm.latitude);
            const dailydata = MakeDailyData(doy,inputForm.latitude,inputForm.longitude);
    
            const finalData = {
                'yearly':yearlydata,
                'daily':dailydata
            }
            setEquationData(finalData)
        }

        FormatData()},
        [inputForm,doy])

    /* 
    Format and generate daily data
    */ 

    function dayCorrection(J:number){
        return 450.8*Math.sin((2*Math.PI*J/365)-0.026903) + 595.4*Math.sin((4*Math.PI*J/365)+0.352835)
    }

    function hourCorrection(time:number,correction:number){
        let responce
        const disc = time+correction
        if(disc > 24){
            responce = (disc) - 24
        }
        else if(disc < 0){
            responce = 24 + (disc)
        }
        else {
            responce = disc
        }
        return responce
    }
    
    const currentTime = currentDate.getUTCHours() + currentDate.getUTCMinutes()/60 + (dayCorrection(doy)/3600)
    const correctionTime = ((4*inputForm.longitude)/60) 
    const hourTime = hourCorrection(currentTime,correctionTime)

    const verticalLocations = {
        'doy':doy,
        'time':hourTime
    }
    
    /* 
    Format and generate scores data
    */ 
    const timeData = {
            'J':doy,
            'lat':inputForm.latitude,
            'T':hourTime,
            'normDay':Math.max(...equationData.yearly.ydata),
            'normTime': Math.max(...equationData.daily.ydata)
        }
    
    const BarData = GetScores(solarData.scores,timeData)

    return (
        <div className=" flex flex-col justify-center">
            <div className="flex felx-col py-4 px-4">
                <p className=" text-xl sm:text-3xl font-semibold text-[#272728]"> Crash Forecast </p>
            </div>
            <div className="flex justify-center space-x-10">
                <div className="basis-1/4">
                    <p className="text-md sm:text-xl font-semibold text-[#272728]">
                        Latitude
                    </p>
                    <input name="latitude" type="range" min={-70} max={70} value={inputForm.latitude} onChange={handleChange} 
                    className="transparent h-[2px] border-transparent bg-[#eeeeee]"/>
                    
                </div>
                <div className="basis-1/4">
                    <p className="text-md sm:text-xl font-semibold text-[#272728]">
                        Longitude
                    </p>
                    <input name="longitude" type="range" min={-180} max={180} value={inputForm.longitude} onChange={handleChange}
                    className="transparent h-[2px] border-transparent bg-[#eeeeee]" />
                </div>
            </div>
            {isClient ? (
                windowDimensions.isSmall ? (
                    <div className="flex flex-col justify-center space-y-10">
                        <div>
                            <ApproximationPlots
                            PlotData={equationData}
                            inputData={inputForm}
                            plotSize={plotSize}
                            verticalLocation={verticalLocations}
                            BarData={BarData}
                            SmallQ={windowDimensions.isSmall}
                            VerticalQ={windowDimensions.isVertical}
                            loadedQ={solarData.loaded}/>
                        </div>
                        </div>):
                        <div className="flex flex-col justify-center space-y-10">
                        <div>
                            <ApproximationPlots
                            PlotData={equationData}
                            inputData={inputForm}
                            plotSize={plotSize}
                            verticalLocation={verticalLocations}
                            BarData={BarData}
                            SmallQ={windowDimensions.isSmall}
                            VerticalQ={false}
                            loadedQ={solarData.loaded}/>
                        </div>
                            <div>
                                <SolarPlots
                                solarData={solarData}
                                plotSize={plotSize}/>
                            </div>
                        </div>
                ):
            <div className="text-md sm:text-xl font-semibold text-[#272728]" > Loading data today is the {doy} day of the year</div>}
        </div>
    )
}