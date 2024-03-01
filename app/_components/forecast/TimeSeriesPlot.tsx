
import * as d3 from 'd3'
import { useRef } from 'react'

type DataProps = {
    xdata: string[],
    ydata: number[],
    PlotLabel:string,
    margin: string,
    plotWidth:number,
    plotHeight:number,
    timeformat:string
    xlabel:string,
    ylabel:string
}

export const TimeSeriesPlot = (props:DataProps) => {

    const svgRef = useRef() as any 

    function MakeLinePlot(funcprops:DataProps,ref:any){

        const xdata = funcprops.xdata
        const ydata = funcprops.ydata
        const w = funcprops.plotWidth
        const h = funcprops.plotHeight
        const margin = funcprops.margin
        const format = funcprops.timeformat

        const parseDate = d3.timeParse(format);

        const localdata:any = []

        for (let i=0; i< xdata.length-1; i++) {
            localdata.push({
                'xval':parseDate(xdata[i]),
                'yval': ydata[i]
            })
            }

        const maxY = Math.max(...ydata)
        const minY = Math.min(...ydata)

        const maxYRange = 1.01*maxY
        const minYRange = 0.99*minY

        const svg = d3.select(ref.current)
            .attr("width",w)
            .attr("height",h)
            .style("margin-top",margin)
            .style("overflow","visible")

        const xScale = d3.scaleTime()
            .domain(d3.extent(localdata, (d:any) => d.xval) as unknown as [Date, Date])
            .range([0,w])

        const yScale  = d3.scaleLinear()
            .domain([minYRange,maxYRange])
            .range([h,0])

        const xAxis = d3.axisBottom(xScale)
                .ticks(2)
        
        const yAxis = d3.axisLeft(yScale)
                .ticks(2)
        
        svg.selectAll('g').remove()

        svg.append('g')
            .call(xAxis)
            .attr("transform",`translate(0,${h})`)
            .append("text")
            .attr("text-anchor", "end")
            .attr("x", w)
            .attr("y", h*0.6)
            .text(funcprops.xlabel)
        
        svg.append('g')
            .call(yAxis)
            .append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("x", 0)
            .attr("y", -h)
            .text(funcprops.ylabel)

        const makeLine = d3.line()
            .x((d:any)=>xScale(d.xval))
            .y((d:any)=>yScale(d.yval))
            .curve(d3.curveCardinal)

        svg.selectAll('text')
            .attr("stroke-width","0")
            .attr("fill","#272728")
            .style("font-size",'14px')
            .style("font-weight",'bold')
            
        svg.selectAll("line")
            .style("stroke", "#272728");
        
        svg.selectAll('path').remove()

        svg.selectAll('.line')
            .data([localdata])
            .join("path")
            .attr('d', d => makeLine(d))
            .attr("fill","none")
            .attr("stroke","#7393B3")
    }   
    
    MakeLinePlot(props,svgRef)

    return (
        <div className="flex justify-center">
            <div className='justify-center'>
                <p>{props.PlotLabel}</p>    
            </div>
            <div className='justify-center'>
                <svg ref={svgRef}/>
            </div>
        </div>
    )
}
