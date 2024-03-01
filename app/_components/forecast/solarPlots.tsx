import { TimeSeriesPlot } from "./TimeSeriesPlot";

type DataProps = {
    solarData:{
        xray:{
            xdata:string[],
            ydata:number[]
        },
        mag:{
            xdata:string[],
            bz:number[],
            bt:number[]
        },
        plasma:{
            xdata:string[],
            density:number[],
            temperature:number[],
            speed:number[]
        }
    },
    plotSize:{
        height:number,
        width:number
    }
}

export const SolarPlots = (props:DataProps) => {
    return(
        <div className="flex justify-center">
            <div className="flex-col justify-center">
            <div className="flex text-[#272728] justify-center">
                    <p className="text-xl font-bold">
                        X-ray and Solar wind Magnetic variables
                    </p>
                </div>
            <TimeSeriesPlot 
                        xdata={props.solarData.xray.xdata} 
                        ydata={props.solarData.xray.ydata} 
                        margin="50" 
                        PlotLabel="X-ray flux" 
                        timeformat="%Y-%m-%dT%H:%M:%LZ"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Time-UTC"
                        ylabel="X-ray flux"/>
            <TimeSeriesPlot 
                        xdata={props.solarData.mag.xdata} 
                        ydata={props.solarData.mag.bt} 
                        margin="50" 
                        PlotLabel="Bt" 
                        timeformat="%Y-%m-%d %H:%M:%S.%L"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Time-UTC"
                        ylabel="Bt" />
            <TimeSeriesPlot 
                        xdata={props.solarData.mag.xdata} 
                        ydata={props.solarData.mag.bz} 
                        margin="50" 
                        PlotLabel="Bz" 
                        timeformat="%Y-%m-%d %H:%M:%S.%L"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Time-UTC"
                        ylabel="Bz"/>
            </div>
            <div className="flex-col justify-center">
                <div className="flex text-[#272728] justify-center">
                    <p className="text-xl font-bold">
                        Solar wind Proton variables
                    </p>
                </div>
                
            <TimeSeriesPlot 
                        xdata={props.solarData.plasma.xdata} 
                        ydata={props.solarData.plasma.density} 
                        margin="50" 
                        PlotLabel="Proton density" 
                        timeformat="%Y-%m-%d %H:%M:%S.%L"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width} 
                        xlabel="Time-UTC"
                        ylabel="density"/>
            <TimeSeriesPlot 
                        xdata={props.solarData.plasma.xdata} 
                        ydata={props.solarData.plasma.speed} 
                        margin="50" 
                        PlotLabel="Proton speed" 
                        timeformat="%Y-%m-%d %H:%M:%S.%L"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Time-UTC"
                        ylabel="speed" />
            <TimeSeriesPlot 
                        xdata={props.solarData.plasma.xdata} 
                        ydata={props.solarData.plasma.temperature} 
                        margin="50" 
                        PlotLabel="Proton temperature" 
                        timeformat="%Y-%m-%d %H:%M:%S.%L"
                        plotHeight={props.plotSize.height} 
                        plotWidth={props.plotSize.width}
                        xlabel="Time-UTC"
                        ylabel="temperature" />
            </div>
        </div>
    )
}
