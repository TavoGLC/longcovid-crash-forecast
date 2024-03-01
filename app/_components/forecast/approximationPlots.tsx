"use client"
import { LinePlot } from "./LinePlot"
import { WorldMap } from "./world"
import { BarPlot } from "./barplot"

type PanelProps = {
    PlotData:{yearly:{
                xdata:number[],
                ydata:number[]}
            daily:{
                xdata:number[],
                ydata:number[]
            }},
    BarData:{
        xdata:number[],
        ydata:string[]
    },
    inputData:{
        latitude:number,
        longitude:number
    },
    plotSize:{
        height:number,
        width:number
    },
    verticalLocation:{
        doy:number,
        time:number
    },
    SmallQ:boolean,
    VerticalQ:boolean,
    loadedQ:boolean
}

const Complete = (props:PanelProps) =>{
    return(
        <div className="flex justify-center space-x-4">
                    <div className="flex flex-col space-x-4 space-y-10">
                    <BarPlot 
                        xdata={props.BarData.xdata} 
                        ydata={props.BarData.ydata} 
                        margin="25" 
                        PlotLabel=" "
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Crash Score"
                        ylabel="Forecast"
                        loaded={props.loadedQ}/>   
                            
                    <LinePlot 
                        xdata={props.PlotData.yearly.xdata} 
                        ydata={props.PlotData.yearly.ydata} 
                        margin="50" 
                        PlotLabel=" " 
                        verticalLocation={props.verticalLocation.doy}
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Day of year"
                        ylabel="Day lenght (h)"/>
                    
                    <LinePlot 
                        xdata={props.PlotData.daily.xdata} 
                        ydata={props.PlotData.daily.ydata} 
                        margin="25" 
                        PlotLabel=" "
                        verticalLocation={props.verticalLocation.time} 
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Solar Time"
                        ylabel="Solar flux"/>   
                </div>
                <div className="flex flex-col justify-center space-x-4">
                    <WorldMap location={props.inputData} plotHeight={props.plotSize.height} plotWidth={props.plotSize.width}/>
                </div>
            </div>
    ) 
}

const VerticalSmall = (props:PanelProps) =>{
    return(
            <div className="flex flex-col justify-center space-x-4">
                <BarPlot 
                    xdata={props.BarData.xdata} 
                    ydata={props.BarData.ydata} 
                    margin="25" 
                    PlotLabel=" "
                    plotHeight={props.plotSize.height*1.25} 
                    plotWidth={props.plotSize.width*1.5}
                    xlabel="Crash Score"
                    ylabel="Forecast"
                    loaded={props.loadedQ}/>   
                        
                <LinePlot 
                    xdata={props.PlotData.yearly.xdata} 
                    ydata={props.PlotData.yearly.ydata} 
                    margin="50" 
                    PlotLabel=" " 
                    verticalLocation={props.verticalLocation.doy}
                    plotHeight={props.plotSize.height*1.25} 
                    plotWidth={props.plotSize.width*2.25}
                    xlabel="Day of year"
                    ylabel="Day lenght (h)"/>
                
                <LinePlot 
                    xdata={props.PlotData.daily.xdata} 
                    ydata={props.PlotData.daily.ydata} 
                    margin="25" 
                    PlotLabel=" "
                    verticalLocation={props.verticalLocation.time} 
                    plotHeight={props.plotSize.height*1.25} 
                    plotWidth={props.plotSize.width*2.25}
                    xlabel="Solar Time"
                    ylabel="Solar flux"/>   
                <div className="flex py-25">
                    <WorldMap location={props.inputData} plotHeight={props.plotSize.height} plotWidth={props.plotSize.width*2.5}/>
                </div>
            </div>
    )
}

const HorizontalSmall = (props:PanelProps) =>{
    return(
            <div className="flex justify-between space-x-20">
                <div className="flex flex-col"> 
                <WorldMap location={props.inputData} plotHeight={props.plotSize.height} plotWidth={props.plotSize.width}/>

                <BarPlot 
                    xdata={props.BarData.xdata} 
                    ydata={props.BarData.ydata} 
                    margin="20" 
                    PlotLabel=" "
                    plotHeight={props.plotSize.height*2.5} 
                    plotWidth={props.plotSize.width*1.1}
                    xlabel="Crash Score"
                    ylabel="Forecast"
                    loaded={props.loadedQ}/>  
                </div>
                <div className="flex-col">
                <LinePlot 
                    xdata={props.PlotData.yearly.xdata} 
                    ydata={props.PlotData.yearly.ydata} 
                    margin="20" 
                    PlotLabel=" " 
                    verticalLocation={props.verticalLocation.doy}
                    plotHeight={props.plotSize.height*2} 
                    plotWidth={props.plotSize.width*1.1}
                    xlabel="Day of year"
                    ylabel="Day lenght (h)"/>
                
                <LinePlot 
                    xdata={props.PlotData.daily.xdata} 
                    ydata={props.PlotData.daily.ydata} 
                    margin="70" 
                    PlotLabel=" "
                    verticalLocation={props.verticalLocation.time} 
                    plotHeight={props.plotSize.height*2} 
                    plotWidth={props.plotSize.width*1.1}
                    xlabel="Solar Time"
                    ylabel="Solar flux"/>   
                </div>
            </div>
    )
}

export const ApproximationPlots = (props:PanelProps) => {
    return(
        <div className="flex justify-center">
            {props.SmallQ ? ( props.VerticalQ ? (
                <VerticalSmall
                PlotData={props.PlotData}
                BarData={props.BarData}
                inputData={props.inputData}
                plotSize={props.plotSize}
                verticalLocation={props.verticalLocation}
                SmallQ={props.SmallQ}
                VerticalQ={props.VerticalQ}
                loadedQ={props.loadedQ}/>
            ):(
                <HorizontalSmall
                PlotData={props.PlotData}
                BarData={props.BarData}
                inputData={props.inputData}
                plotSize={props.plotSize}
                verticalLocation={props.verticalLocation}
                SmallQ={props.SmallQ}
                VerticalQ={props.VerticalQ}
                loadedQ={props.loadedQ}/>
            )
            ):(
                <Complete
                PlotData={props.PlotData}
                BarData={props.BarData}
                inputData={props.inputData}
                plotSize={props.plotSize}
                verticalLocation={props.verticalLocation}
                SmallQ={props.SmallQ}
                VerticalQ={props.VerticalQ}
                loadedQ={props.loadedQ}/>
            )}
        </div>
    )
}